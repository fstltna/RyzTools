var storage = window.localStorage;
var settings = JSON.parse(storage.getItem('settings'));

var getRealContentHeight = function () {
	var header = $.mobile.activePage.find("div[data-role='header']:visible");
	var footer = $.mobile.activePage.find("div[data-role='footer']:visible");
	var content = $.mobile.activePage.find("div[data-role='content']:visible:visible");
	var viewport_height = $(window).height();

	var content_height = viewport_height - header.outerHeight() - footer.outerHeight();
	if ((content.outerHeight() - header.outerHeight() - footer.outerHeight()) <= viewport_height) {
		content_height -= (content.outerHeight() - content.height() + 20);
	}
	return content_height;
}

var getElementByXpath = function (xml, path) {
	return xml.evaluate(path, xml, null, 9, null).singleNodeValue;
};

var isNumber = function (n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function capitaliseFirstLetter (string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

var removeArrayValue = function (arr) {
	var what, a = arguments, L = a.length, ax;
	while (L > 1 && arr.length) {
		what = a[--L];
		while ((ax= arr.indexOf(what)) !== -1) {
			arr.splice(ax, 1);
		}
	}
	return arr;
}

var refreshPage = function () {
	jQuery.mobile.changePage(window.location.href, {
		allowSamePageTransition: true,
		transition: 'none',
		reloadPage: true
	});
}

var Cache = function (name) {
	this.name = name;

	this.clear = function (content) {
		 localStorage.removeItem('Cache');
	};

	this.age = function (content) {
		storage = this.retrieve();

		var getter = storage[name];
		if (getter === undefined) {
			return false;
		}
		return (new Date().getTime() - storage[this.name].timestamp) / 1000;
	};

	this.exists = function (content) {
		storage = this.retrieve();

		var getter = storage[name];
		if (getter === undefined) {
			return false;
		}
		return true;
	};

	this.put = function (content) {
		storage = this.retrieve();

		storage[this.name] = {};
		storage[this.name].timestamp = new Date().getTime();
		storage[this.name].content = content;

		localStorage.setItem('Cache', JSON.stringify(storage));
	};

	this.get = function () {
		storage = this.retrieve();

		var getter = storage[name];
		if (getter === undefined) {
			return false;
		}
		return getter.content;
	};

	this.retrieve = function () {
		var storage = JSON.parse(localStorage.getItem('Cache'));
		if (storage  === null) {
			storage = {};
		};

		return storage;
	}
};

var requestUrl = function (url, post, timeout) {
	if (timeout === undefined) {
		timeout = 1000;
	}
	var ret = {};

	$.ajax({
		type: "GET",
		url: url,
		async: false,
		timeout: timeout,
		dataType: "html",
		success: function (xml) {
			// console.log('Got it!');
			ret.reply = xml;
		},
		error: function (e, ee) {
			// console.log(ee);
		}
	});

	return ret;
}

var getXml = function (url, ttl, xpath, timeout) {
	var cache = new Cache(url);

	var ret = {};

	if (ttl === undefined) {
		ttl = 600;
	}

	if (!cache.exists()) {
		ret = requestUrl(url, undefined, timeout);
		if (typeof ret.reply === 'object') {
			cache.put((new XMLSerializer()).serializeToString(ret.reply));
		}
	} else {
		var reload = false;

		if ((xpath === undefined) && (ttl !== undefined) && (cache.age() > ttl)) {
			reload = true;
		}

		if (xpath !== undefined) {
			var expire = getElementByXpath((new DOMParser()).parseFromString(cache.get(), 'text/xml'), xpath);

			if (expire === null) {
				expire = parseInt(new Date().getTime() / 1000) - ttl;
			} else if (isNumber(expire.value)) {
				expire = parseInt(expire.value);
			} else {
				expire = parseInt(new Date(expire.value) / 1000);
			}

			if (expire < parseInt(new Date().getTime() / 1000)) {
				if ((ttl !== false) && (cache.age() > ttl)) {
					reload = true;
				}
			}
		}
		if (reload === true) {
			ret = requestUrl(url, undefined, timeout);
			if (typeof ret.reply === 'object') {
				cache.put((new XMLSerializer()).serializeToString(ret.reply));
			}
		}

		ret.reply = (new DOMParser()).parseFromString(cache.get(), 'text/xml');
	}

	return ret;
}

var urlGet = function (part) {
	var get = decodeURIComponent(document.location.search).substring(1).split('&');
	var path = {};
	if (get.length > 0) {
		for (var i in get) {
			var tmp = get[i].split('=');
			if (tmp[0].match(/.*?\[.*?\]/)) {
				var split = tmp[0].split(/(.*?)\[(.*?)\]/);
				if (path[split[1]] === undefined) {
					path[split[1]] = [];
				}
				path[split[1]][split[2]] = tmp[1];
			} else {
				path[tmp[0]] = tmp[1];
			}
		}
	}
	if (part !== undefined) {
		if (path[part] !== undefined) {
			return path[part];
		}
		return false;
	}
	return path;
}

var RyzomApi = {
	getCharacter: function (key) {
		var xml = getXml('http://api.ryzom.com/character.php?apikey=' + key, 30, '/ryzomapi/character/@cached_until');
		if ($(xml.reply).find('ryzomapi > character > error').text() !== '') {
			return false;
		}
		return xml;
	},
	getGuild: function (key) {
		var xml = getXml('http://api.ryzom.com/guild.php?apikey=' + key, 30, '/ryzomapi/character/@cached_until');
		if ($(xml.reply).find('ryzomapi > character > error').text() !== '') {
			return false;
		}
		return xml;
	},
	getSeasonChange: function (key) {
		var xml = getXml('http://api.ryzom.com/time.php?format=xml', 30, '/shard_time/cache/@expire');
		if ($(xml.reply).find('server_tick').text() === '') {
			return false;
		}
		return xml;
	}
}

var RyzomTime = function (tick, created) {
	/*
		1 day = 72 minutes
		1 hour = 72 / 24 = 3 minutes
		1 season = 90 atys days = 6480 minutes
	*/

	this.tick = tick;
	this.created = created;

	/* Basic constants */
	/* 1 IG hour = 3 IRL minutes = 1800 ticks */
	this.hourTicks = 1800;
	this.dayHours = 24;
	this.seasonDays = 90;
	this.monthDays = 30;
	this.cycleMonths = 12;
	this.jyCycles = 4;
	this.weekDays = 6;
	/* 0 = spring, 1 = summer, 2 = automn, 3 = winter */
	this.cycleSeason = 4;
	/* Tick is offset on server of 61 days. */
	this.tickOffset = 61 * this.dayHours * this.hourTicks;

	this.startJy = 2525;

	/* Helpers */
	this.cycleDays = this.cycleMonths * this.monthDays;
	this.jyDays = this.cycleDays * this.jyCycles;
	this.jyMonths = this.cycleMonths * this.jyCycles;

	this.getTick = function () {
		var now = new Date().getTime();
		var createdOffset = (now - new Date(this.created * 1000).getTime()) / 1000;
		var correctedTick = this.tick + (createdOffset * 10);
		return Math.round(correctedTick);
	}

	this.getDayOfSeason = function () {
		var time_in_hours = (this.getTick() - this.tickOffset) / this.hourTicks;
		var day = time_in_hours / this.dayHours;

		return Math.floor(day % this.seasonDays);
	}

	this.getTimeOfDay = function () {
		var time_in_hours = (this.getTick() - this.tickOffset) / this.hourTicks;

		return Math.abs(time_in_hours) % this.dayHours;
	}
}

if (settings === null) {
	settings = {};
	storage.setItem('settings', JSON.stringify(settings));
}

/*
$(document).on('pageshow', '#Windage', function(){
	$('[data-role="content"]').height(getRealContentHeight());
	$('.ui-content').css('background-image','url(Image/timer.png)');
});
*/

// $.mobile.defaultPageTransition   = 'none';
// $.mobile.defaultDialogTransition = 'none';
// $.mobile.buttonMarkup.hoverDelay = 0;
// $.mobile.ajaxEnabled = false;

$(window).on('orientationchange', function (event) {
	refreshPage();
});

$( document ).on( "pagebeforehide", function( event, data ) {
	$('#indexPage .article').empty();
});

$(document).on("pageshow", "#indexPage", function () {
	if (document.location.search === '') {
		var menuLi = $('#left-panel a[href="index.html"]').closest('li');
	} else {
		var menuLi = $('#left-panel a[href="' + document.location.search + '"]').closest('li');
	}
	$('#left-panel li').removeClass('ui-btn-active');
	menuLi.addClass('ui-btn-active');

	$('#indexPage .article').empty();

	if (urlGet('page') === false) {
		loadIndexPage();
	} else {
		var functionString = 'load' + capitaliseFirstLetter(urlGet('page').replace(/\//, '_')) + 'Page';
		if (eval('typeof ' + functionString) !== 'undefined') {
			window[functionString]();
		} else {
			$('#indexPage .article').html('An unknown action was requested. Sorry.');
		}
	}
});

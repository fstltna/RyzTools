/************************************************************\
|                          Index                             |
\************************************************************/
var loadIndexPage = function () {
	$('#indexPage .article').html('<h1>RyzTools v 1.3.1</h1>\
	<p>\
		Welcome to Ryztools.\
	</p>');

	$('#indexPage .article').append('<a href="?page=seasonchange" data-role="button" class="ryzomButton">Season change</a>');
	$('#indexPage .article').append('<a href="?page=character" data-role="button" class="ryzomButton">Characters</a>');
	$('#indexPage .article').append('<a href="?page=guild" data-role="button" class="ryzomButton">Guilds</a>');
	if (navigator.app !== undefined) {
		$('#indexPage .article').append('<a href="#" onclick="navigator.app.exitApp();" data-role="button" class="ryzomButton">Exit</a>');
	}
	$('.ryzomButton').button();
}

/************************************************************\
|                          About                             |
\************************************************************/
var loadAboutPage = function () {
	$('#indexPage .article').html('<h1>About Ryztools</h1>\
\
<p><b>To use this app you must get a API key from Ryzom</b>. You can do that here: <a href="http://app.ryzom.com/app_ryzomapi/index.php?from_index=1">http://app.ryzom.com/app_ryzomapi/index.php?from_index=1</a></p>
<p>For more news of Ryzom see the portal at <a href="https://ryzomcity.org">https://RyzomCity.org</a></p>
<p>This app was written both for me to learn about phone app development, and to aid people that do not wanna use an external browser to look things up.</p>\
<p>\
	Have ideas, comments, questions, found a bug, etc? Talk to me in game, send me an in game mail, click the contact developer button or look me up on irc (freenode).\
	All feedbacks for both constructive critisism or just a comment on what you think is always welcome.\
</p>\
<p>-- Drogos, Spiritus Artificis</p>\
<h2>Thanks to</h2>\
<p>Tuxi for helping testing and keeping up with me and all the time I spend on this.</p>\
<p>Dinorath for testing and coming with good ideas.</p>\
<p>Yorran for helping out with all the hard math.</p>\
<p>Ryzom community for just being awesome!</p>\
	');
}

/************************************************************\
|                    Malus Crafting                          |
\************************************************************/
var loadCrafting_malusPage = function () {
	$('#indexPage .article').html('<table data-role="table" id="my-table" data-mode="" class="table-stroke table-stripe">\
	<thead>\
		<tr>\
			<th>Use</th>\
			<th>Result</th>\
			<th>HA Pieces</th>\
			<th>MA Pieces</th>\
			<th>Set q</th>\
		</tr>\
	</thead>\
	<tbody>\
		<tr>\
			<td>Gear</td>\
			<td>240</td>\
			<td>2</td>\
			<td></td>\
			<td>250</td>\
		</tr>\
		<tr>\
			<td>Both</td>\
			<td>230</td>\
			<td>4</td>\
			<td></td>\
			<td>250</td>\
		</tr>\
		<tr>\
			<td>Gear</td>\
			<td>220</td>\
			<td>6</td>\
			<td></td>\
			<td>250</td>\
		</tr>\
\
		<tr>\
			<td>Gear</td>\
			<td>210</td>\
			<td>4</td>\
			<td>2</td>\
			<td>230</td>\
		</tr>\
		<tr>\
			<td>Amps</td>\
			<td>200</td>\
			<td>2</td>\
			<td>1</td>\
			<td>210</td>\
		</tr>\
		<tr>\
			<td>Gear</td>\
			<td>190</td>\
			<td>2</td>\
			<td>2</td>\
			<td>200</td>\
		</tr>\
		<tr>\
			<td>Amps</td>\
			<td>180</td>\
			<td>5</td>\
			<td></td>\
			<td>200</td>\
		</tr>\
		<tr>\
			<td>Gear</td>\
			<td>170</td>\
			<td>3</td>\
			<td></td>\
			<td>180</td>\
		</tr>\
		<tr>\
			<td>Amps</td>\
			<td>160</td>\
			<td>3</td>\
			<td></td>\
			<td>170</td>\
		</tr>\
		<tr>\
			<td>Gear</td>\
			<td>150</td>\
			<td>6</td>\
			<td></td>\
			<td>170</td>\
		</tr>\
		<tr>\
			<td>Amps</td>\
			<td>140</td>\
			<td>3</td>\
			<td>2</td>\
			<td>150</td>\
		</tr>\
		<tr>\
			<td>Gear</td>\
			<td>130</td>\
			<td>3</td>\
			<td>3</td>\
			<td>140</td>\
		</tr>\
		<tr>\
			<td>Amps</td>\
			<td>120</td>\
			<td>4</td>\
			<td></td>\
			<td>130</td>\
		</tr>\
		<tr>\
			<td>Gear</td>\
			<td>110</td>\
			<td>4</td>\
			<td>1</td>\
			<td>120</td>\
		</tr>\
	</tbody>\
</table>');
	$('#indexPage #my-table').table();
}

/************************************************************\
|                    Craft simulator                         |
\************************************************************/
var loadCrafting_simulatorPage = function () {
	if ((urlGet('quality') === false) || (urlGet('pattern') === false)) {
		$('#indexPage .article').html('<h1>Crafting</h1>');
		$('#indexPage .article').append('<p style="color: #c00;">This module is incomplete, see below.</p>');
		$('#indexPage .article').append('<p style="color: #c00;">This module will query a online server for calculations.</p>');
		$('#indexPage .article').append('<a href="select-pattern.html" data-role="button" data-rel="dialog" class="ryzomButton">Select pattern</a>');
		$('#indexPage .article').append('\
<h3>Sometimes, no result is shown.</h3>\
<p>* Not all calculations are done yet.</p>\
\
<h3>There should be a way to edit what I have added of mats.</h3>\
<p>* Yes it should.</p>\
\
<h3>I want to see the stats of mats.</h3>\
<p>* In a future version.</p>\
\
<h3>What is "other".</h3>\
<p>* Yeah, what is "other"?</p>\
\
<h3>Can I save what I made?</h3>\
<p>* Not yet.</p>\
\
<h3>Can I share what I made?</h3>\
<p>* Maybe one day.</p>\
\
<h3>This does not look finished!</h3>\
<p>* Correct, it is not. Working on that :)</p>\
');
		$('.ryzomButton').button();
	} else {
		var pattern = craftPatterns[urlGet('pattern')];
		if (pattern !== undefined) {
			pattern = pattern[urlGet('quality')];
		}
		if (pattern !== undefined) {
			$('#indexPage .article').empty();
			$('#indexPage .article').append('<form><div data-role="fieldcontain">\
				<label for="level" class="select">Level:</label>\
				<select name="level" id="level">\
					<option value="250">250</option>\
					<option value="240">240</option>\
					<option value="230">230</option>\
					<option value="220">220</option>\
					<option value="210">210</option>\
					<option value="200">200</option>\
					<option value="190">190</option>\
					<option value="180">180</option>\
					<option value="170">170</option>\
					<option value="160">160</option>\
					<option value="150">150</option>\
					<option value="140">140</option>\
					<option value="130">130</option>\
					<option value="120">120</option>\
					<option value="110">110</option>\
					<option value="100">100</option>\
					<option value="90">90</option>\
					<option value="80">80</option>\
					<option value="70">70</option>\
					<option value="60">60</option>\
					<option value="50">50</option>\
					<option value="40">40</option>\
					<option value="30">30</option>\
					<option value="20">20</option>\
					<option value="10">10</option>\
				</select>\
			</div></form>');
			var l = '250';
			if (urlGet('level') !== false) {
				l = urlGet('level');
			}
			$('#level').val(l);
			$('form').trigger('create');
			$('#level').on('change', function () {
				var url = document.location.search;
				var regex = RegExp('(\\?|\\&)level=\\d+', 'g');
				document.location.href = url.replace(regex, '') + '&level=' + $(this).val();
			});
			for (i in pattern) {
				var name = i;
				var have = urlGet(i);
				var used = 0;
				if (urlGet(name) !== false) {
					for (j in have) {
						used += parseInt(have[j]);
					}
				}
				$('#indexPage .article').append('<div data-material="' + i + '"></div>');
				$('[data-material="' + i + '"]').append('<h3>' + capitaliseFirstLetter(name.replace(/_/, ' ')) + ' ' + used + ' / ' + pattern[i] + '</h3>');
				if (used > 0) {
					$('[data-material="' + i + '"]').append('<ul class="matList matlist-' + i + ' touch" data-role="listview" data-icon="false" data-split-icon="delete" data-split-theme="d"></ul>');
					for (j in have) {
						var html = '<li data-icon="delete" data-materialid="' + j + '">';
						html += '<a href="#">' + have[j] + 'x ' + itemNames[j] + '</a>';
						html += '<a href="#" class="delete">Delete</a></li>';
						$('.matlist-' + i).append(html);
					}
					$('.matlist-' + i).listview();
				}
				if ((pattern[i] - used) > 0) {
					$('[data-material="' + i + '"]').append('<a href="add-item.html" data-material="' + i + '" data-max="' + (pattern[i] - used) + '" data-role="button" data-rel="dialog" class="itemButton">Add item</a>');
				} else {
					$('[data-material="' + i + '"]').append('<br>');
				}
			}
			$('.itemButton').on('click', function () {
				sessionStorage.setItem('max', $(this).data('max'));
				sessionStorage.setItem('material', $(this).parent().data('material'));
			});
			$('.itemButton').button();

			$('#indexPage .article').append('<br><div class="craftResult">Craft result.</div>');

			$('.craftResult').empty();
			$('.craftResult').load('http://ryztoolsapi.ryzomcity.org/' + document.location.search, function (response, status, xhr) {
				if (status == 'error') {
					var msg = 'Sorry but there was an error: ';
					$('.craftResult').html(msg + xhr.status + ' ' + xhr.statusText);
				}
			});

			$(document).on("swipeleft swiperight", ".matList li.ui-li", function (event) {
				var listitem = $( this ),
					// These are the classnames used for the CSS transition
					dir = event.type === "swipeleft" ? "left" : "right",
					// Check if the browser supports the transform (3D) CSS transition
					transition = $.support.cssTransform3d ? dir : false;

					confirmAndDelete( listitem, transition );
			});

			// If it's not a touch device...
			if (!$.mobile.support.touch) {

				// Remove the class that is used to hide the delete button on touch devices
				$(".matList").removeClass("touch");

				// Click delete split-button to remove list item
				$(".delete").on("click", function () {
					var listitem = $(this).parent("li.ui-li");

					confirmAndDelete(listitem);
				});
			}

			function confirmAndDelete (listitem, transition) {
				var id = $(listitem).data('materialid');
				var mat = $(listitem).parent().parent().data('material');
				var url = document.location.search;

				var regex = RegExp('(\\?|\\&)' + mat + '\\[' + id + '\\]=\\d+', 'g');
				document.location.href = url.replace(regex, '');
			}
		} else {
			$('#indexPage .article').html('<h1>Crafting</h1><p>Pattern not found.</p>');
		}
	}
}


/************************************************************\
|                        Settings                            |
\************************************************************/
var loadSettingsPage = function () {
	function runtimePopup (popupafterclose) {
		var template = '<div id="confirm" class="ui-content" data-role="popup" data-theme="none">\
			<p id="question">Are you sure you want to delete</p>\
			<div class="ui-grid-a">\
				<div class="ui-block-a">\
					<a id="yes" data-role="button" data-mini="true" data-shadow="false" data-theme="b" data-rel="back">Yes</a>\
				</div>\
				<div class="ui-block-b">\
					<a id="cancel" data-role="button" data-mini="true" data-shadow="false" data-theme="b" data-rel="back">Cancel</a>\
				</div>\
			</div>\
		</div>';

		popupafterclose = popupafterclose ? popupafterclose : function () {};

		$.mobile.activePage.append(template).trigger("create");

		$.mobile.activePage.find(".closePopup").bind("tap", function (e) {
			$.mobile.activePage.find(".messagePopup").popup("close");
		});

		$.mobile.activePage.find(".messagePopup").popup().popup("open").bind({
			popupafterclose: function () {
				$(this).unbind("popupafterclose").remove();
				popupafterclose();
			}
		});
	}

	$('#indexPage .article').html('<ul class="apiKeysList touch" data-role="listview" data-icon="false" data-split-icon="delete" data-split-theme="d">\
		</ul>\
		<a href="settings/add-api-key.html" data-role="button" data-rel="dialog">Add key</a>');


	var storage = window.localStorage;
	var settings = JSON.parse(storage.getItem('settings'));
	if (settings.apiKeys !== undefined) {
		$('.apiKeysList').empty();
		for (var i in settings.apiKeys) {
			var type = settings.apiKeys[i].substring(0, 1);
			var html = '<li data-icon="delete" data-apikey="' + settings.apiKeys[i] + '">';
			if (type === 'c') {
				var res = RyzomApi.getCharacter(settings.apiKeys[i]);
				html += '<a href="?page=character&key=' + settings.apiKeys[i] + '">';
				html += '<h3>Character: ' + $(res.reply).find('ryzomapi > * > name').text() + '</h3>';
				html += '<p>Modules: ' + $(res.reply).find('ryzomapi > *').attr('modules') + '</p>';
				html += '<p class="key" style="display: none;">' + $(res.reply).find('ryzomapi > * > name').text() + ': ' + $(res.reply).find('ryzomapi > *').attr('modules') + '</p>';
			} else if (type === 'g') {
				var res = RyzomApi.getGuild(settings.apiKeys[i]);
				html += '<a href="?page=guild&key=' + settings.apiKeys[i] + '">';
				html += '<h3>Guild: ' + $(res.reply).find('ryzomapi > * > name').text() + '</h3>';
				html += '<p>Modules: ' + $(res.reply).find('ryzomapi > *').attr('modules') + '</p>';
				html += '<p class="key" style="display: none;">' + $(res.reply).find('ryzomapi > * > name').text() + ': ' + $(res.reply).find('ryzomapi > *').attr('modules') + '</p>';
			} else {
				html += '<a href="?page=settings">';
				html += '<h3>Unknown</h3>';
				html += '<p class="key" style="display: none;">Unknown</p>';
			}
			html += '</a><a href="#" class="delete">Delete</a></li>';
			$('.apiKeysList').append(html);
		}
		$('.apiKeysList').listview();
	}
	$('#indexPage .article [data-role="button"]').button();
	runtimePopup();

	$(document).on("swipeleft swiperight", ".apiKeysList li.ui-li", function (event) {
		var listitem = $( this ),
			// These are the classnames used for the CSS transition
			dir = event.type === "swipeleft" ? "left" : "right",
			// Check if the browser supports the transform (3D) CSS transition
			transition = $.support.cssTransform3d ? dir : false;

			confirmAndDelete( listitem, transition );
	});

	// If it's not a touch device...
	if (!$.mobile.support.touch) {

		// Remove the class that is used to hide the delete button on touch devices
		$(".apiKeysList").removeClass("touch");

		// Click delete split-button to remove list item
		$(".delete").on("click", function () {
			var listitem = $(this).parent("li.ui-li");

			confirmAndDelete(listitem);
		});
	}

	function confirmAndDelete (listitem, transition) {
		// Highlight the list item that will be removed
		listitem.addClass( "ui-btn-down-d" );
		// Inject topic in confirmation popup after removing any previous injected topics
		$("#confirm .key").remove();
		listitem.find(".key").clone().show().insertAfter("#question");
		// Show the confirmation popup
		$("#confirm").popup("open");
		// Proceed when the user confirms
		$("#confirm #yes").on("click", function() {

			removeArrayValue(settings.apiKeys, listitem.data('apikey'));
			storage.setItem('settings', JSON.stringify(settings));

			// Remove with a transition
			if (transition) {

				listitem
					// Remove the highlight
					.removeClass("ui-btn-down-d")
					// Add the class for the transition direction
					.addClass( transition )
					// When the transition is done...
					.on("webkitTransitionEnd transitionend otransitionend", function () {
						// ...the list item will be removed
						listitem.remove();
						// ...the list will be refreshed and the temporary class for border styling removed
						$(".apiKeysList").listview("refresh").find(".ui-li.border").removeClass("border");
					})
					// During the transition the previous list item should get bottom border
					.prev("li.ui-li").addClass("border");
			}
			// If it's not a touch device or the CSS transition isn't supported just remove the list item and refresh the list
			else {
				listitem.remove();
				$(".apiKeysList").listview("refresh");
			}
		});
		// Remove active state and unbind when the cancel button is clicked
		$("#confirm #cancel").on("click", function () {
			listitem.removeClass("ui-btn-down-d");
			$("#confirm #yes").off();
		});
	}
};

/************************************************************\
|                        Inventory                           |
\************************************************************/
var loadInventoryPage = function () {
	var storage = window.localStorage;
	var settings = JSON.parse(storage.getItem('settings'));
	if (settings.apiKeys !== undefined) {
		var items = {};
		for (i in settings.apiKeys) {
			var apiKey = settings.apiKeys[i];
			if (apiKey.substring(0, 1) === 'g') {
				var xml = RyzomApi.getGuild(settings.apiKeys[i]);
				var name = $(xml.reply).find('ryzomapi > * > name').text();
				if (xml === false) {
					continue;
				}
				if ($(xml.reply).find('ryzomapi > * > room > item').length > 0) {
					$(xml.reply).find('ryzomapi > * > room > item').each(function () {
						var sheet = $(this).children('sheet').text();
						sheet = sheet.substring(0, sheet.length - 6);

						var amount = parseInt($(this).children('stack').text());
						var quality = parseInt($(this).children('quality').text());
						if (items[sheet] === undefined) {
							items[sheet] = {};
							items[sheet].amount = 0;
							items[sheet].stacks = [];
						}
						items[sheet].amount += amount;;
						items[sheet].stacks.push({
							"amount": amount,
							"quality": quality,
							"key": apiKey,
							"name": name,
							"location": 'room'
						});
					});
				}
			} else if (settings.apiKeys[i].substring(0, 1) === 'c') {
				var xml = RyzomApi.getCharacter(settings.apiKeys[i]);
				var name = $(xml.reply).find('ryzomapi > * > name').text();
				if (xml === false) {
					continue;
				}
				if ($(xml.reply).find('ryzomapi > * > room > item').length > 0) {
					$(xml.reply).find('ryzomapi > * > room > item').each(function () {
						var sheet = $(this).children('sheet').text();
						sheet = sheet.substring(0, sheet.length - 6);

						var amount = parseInt($(this).children('stack').text());
						var quality = parseInt($(this).children('quality').text());
						if (items[sheet] === undefined) {
							items[sheet] = {};
							items[sheet].amount = 0;
							items[sheet].stacks = [];
						}
						items[sheet].amount += amount;;
						items[sheet].stacks.push({
							"amount": amount,
							"quality": quality,
							"key": apiKey,
							"name": name,
							"location": 'room'
						});
					});
				}
				if ($(xml.reply).find('ryzomapi > * > bag > item').length > 0) {
					$(xml.reply).find('ryzomapi > * > bag > item').each(function () {
						var sheet = $(this).children('sheet').text();
						sheet = sheet.substring(0, sheet.length - 6);

						var amount = parseInt($(this).children('stack').text());
						var quality = parseInt($(this).children('quality').text());
						if (items[sheet] === undefined) {
							items[sheet] = {};
							items[sheet].amount = 0;
							items[sheet].stacks = [];
						}
						items[sheet].amount += amount;;
						items[sheet].stacks.push({
							"amount": amount,
							"quality": quality,
							"key": apiKey,
							"name": name,
							"location": 'bag'
						});
					});
				}
				if ($(xml.reply).find('ryzomapi > * > pets > *').length > 0) {
					$(xml.reply).find('ryzomapi > * > pets > *').each(function () {
						var index = $(this).attr('index');
						if ($(this).find('inventory > item').length > 0) {
							$(this).find('inventory > item').each(function () {
								var sheet = $(this).children('sheet').text();
								sheet = sheet.substring(0, sheet.length - 6);

								var amount = parseInt($(this).children('stack').text());
								var quality = parseInt($(this).children('quality').text());
								if (items[sheet] === undefined) {
									items[sheet] = {};
									items[sheet].amount = 0;
									items[sheet].stacks = [];
								}
								items[sheet].amount += amount;;
								items[sheet].stacks.push({
									"amount": amount,
									"quality": quality,
									"key": apiKey,
									"name": name,
									"location": 'pet' + index
								});
							});
						}
					});
				}
			}
		}

	function runtimePopup (popupafterclose) {
		var template = '<div id="showExtended" class="ui-content" data-role="popup" data-theme="b">\
			<div class="popupContent"></div>\
			<a id="cancel" data-role="button" data-rel="back">Close</a>\
		</div>';

		popupafterclose = popupafterclose ? popupafterclose : function () {};

		$.mobile.activePage.append(template).trigger("create");

		$.mobile.activePage.find(".closePopup").bind("tap", function (e) {
			$.mobile.activePage.find(".messagePopup").popup("close");
		});

		$.mobile.activePage.find(".messagePopup").popup().popup("open").bind({
			popupafterclose: function () {
				$(this).unbind("popupafterclose").remove();
				popupafterclose();
			}
		});
	}
	runtimePopup();

		$('#indexPage .article').html('<h1>Inventory</h1>');
		$('#indexPage .article').append('<ul class="items" data-role="listview" data-inset="true" data-filter="true" data-filter-reveal="true" data-filter-theme="c" data-divider-theme="d" data-filter-placeholder="Search items..."></ul>');
		$('#indexPage .article').append('<p>The more stuff, the slower the performance…</p>');
		$('#indexPage .article').append('<p>Fewer results = better performance.</p>');
		$('#indexPage .article').append('<p>Click on an item to get extended info.</p>');
		$('.items').empty();
		for (i in items) {
			$('.items').append('<li><a href="#" data-sitem="' + i + '">' + items[i].amount + 'x ' + itemNames[i] + '</a></li>');
		}
		$('.items').listview();

		$('a[data-sitem]').on('click', function (e) {
			e.preventDefault();
			var sitem = $(this).data('sitem');
			$('.popupContent').html('<h3>' + itemNames[sitem] + '</h3>');
			$('.popupContent').append('<p>Total amount: ' + items[sitem].amount + '</p>');
			$('.popupContent').append('<h4>Stacks</h3>');
			for (i in items[sitem].stacks) {
				var cur = items[sitem].stacks[i];
				$('.popupContent').append('<p>' + cur.amount + 'x q' + cur.quality + ' ' + cur.name + ' ' + cur.location + '</p>');
			}
			$("#showExtended").popup('open');
		});
		//console.log(items);
	} else {
		$('#indexPage .article').html('<h1>Inventory</h1><p>No api keys found.</p>');
	}
};

/************************************************************\
|                          Guild                             |
\************************************************************/
var loadGuildPage = function () {
	$('#indexPage .article').html('<div id="guild"></div>');

	if (urlGet('key') !== false) {
		var xml = RyzomApi.getGuild(urlGet('key'));

		if (xml.reply === false) {
			$('#indexPage #guild').html('Could not get any guild data for key: ' + urlGet('key'));
		} else if ($(xml.reply).find('ryzomapi > * > error').text() !== '') {
			$('#indexPage #guild').html($(xml.reply).find('ryzomapi > guild > error').text());
		} else {
			if (urlGet('action') === 'inventory') {
				$('#indexPage #guild').append('<h3>' + $(xml.reply).find('ryzomapi > * > name').text() + ' inventory</h3>');

				if ($(xml.reply).find('ryzomapi > * > room > *').length > 0) {
					$('#indexPage #guild').append('<div class="guild_items" data-role="collapsible-set" data-theme="b" data-content-theme="d"></div>');
					$('.guild_items').empty();

					if ($(xml.reply).find('ryzomapi > * > room > item').length > 0) {

						$('.guild_items').append('<div data-role="collapsible"><h2>Room</h2><ul class="guild_items_room" data-role="listview" data-filter="true" data-filter-theme="c" data-divider-theme="d"></ul></div>');
						$('.guild_items_room').empty();

						$(xml.reply).find('ryzomapi > * > room > item').each(function () {
							var img = 'sheetid=' + $(this).children('sheet').text();
							if ($(this).children('craftparameters').children('color').text() !== '') {
								img += '&c=' + $(this).children('craftparameters').children('color').text();
							}
							if ($(this).children('quality').text() !== '') {
								img += '&q=' + $(this).children('quality').text();
							}
							if (($(this).children('stack').text() !== '') && ($(this).children('stack').text() !== '1')) {
								img += '&s=' + $(this).children('stack').text();
							}
							var name = $(this).children('sheet').text();
							name = name.substring(0, name.length - 6);
							if (itemNames[name] !== undefined) {
								var q = $(this).children('stack').text();
								if (q !== '') {
									q += 'x ';
								}
								//$('#character').append(q + itemNames[name] + '<br>');
								$('.guild_items_room').append('<li>' + q + itemNames[name] + '</li>');
							}
							//$('#character').append('<img src="http://api.ryzom.com/item_icon.php?' + img + '">');
						});
						$('.guild_items_room').listview();
					}
					$('.guild_items').collapsibleset();
				}
			} else {
				$('#indexPage #guild').append('<h3>' + $(xml.reply).find('ryzomapi > * > name').text() + '</h3>');
				if ($(xml.reply).find('ryzomapi > * > motd').text() !== '') {
					$('#indexPage #guild').append('<p>MOTD: ' + $(xml.reply).find('ryzomapi > * > motd').text() + '</p>');
				}

				$('#indexPage #guild').append('<a href="' + document.location.search + '&action=inventory" data-role="button" class="ryzomButton">Inventory</a>');
				$('.ryzomButton').button();
			}
		}
	} else {
		$('#indexPage #guild').html('<h1>Guilds</h1>');

		var storage = window.localStorage;
		var settings = JSON.parse(storage.getItem('settings'));
		var foundGuilds = false;
		if (settings.apiKeys !== undefined) {
			$('#indexPage #guild').append('<ul class="apiKeysList touch" data-role="listview">\
		</ul>');
			$('.apiKeysList').empty();
			for (var i in settings.apiKeys) {
				var type = settings.apiKeys[i].substring(0, 1);
				if (type === 'g') {
					var res = RyzomApi.getGuild(settings.apiKeys[i]);
					var html = '<li>';
					foundGuilds = true;

					html += '<a href="?page=guild&key=' + settings.apiKeys[i] + '">';
					html += '<h3>Guild: ' + $(res.reply).find('ryzomapi > * > name').text() + '</h3>';
					html += '<p>Modules: ' + $(res.reply).find('ryzomapi > *').attr('modules') + '</p>';
					html += '<p class="key" style="display: none;">' + $(res.reply).find('ryzomapi > * > name').text() + ': ' + $(res.reply).find('ryzomapi > *').attr('modules') + '</p>';
					html += '</ul>';

					$('.apiKeysList').append(html);
				}
			}
			if (foundGuilds === true) {
				$('.apiKeysList').listview();
			}
		}
		if (foundGuilds === false) {
			$('#indexPage #guild').append('<p>No guild keys added.</p>');
		}
	}
}

/************************************************************\
|                        Character                           |
\************************************************************/
var loadCharacterPage = function () {
	$('#indexPage .article').html('<div id="character"></div>');

	if (urlGet('key') !== false) {
		var xml = RyzomApi.getCharacter(urlGet('key'));

		if (xml.reply === false) {
			$('#indexPage #character').html('Could not get any character data for key: ' + urlGet('key'));
		} else if ($(xml.reply).find('ryzomapi > * > error').text() !== '') {
			$('#indexPage #character').html($(xml.reply).find('ryzomapi > * > error').text());
		} else {
			if (urlGet('action') === 'inventory') {
				$('#indexPage #character').append('<h3>' + $(xml.reply).find('ryzomapi > * > name').text() + ' inventory</h3>');

				$('#indexPage #character').append('<div class="character_items" data-role="collapsible-set" data-theme="b" data-content-theme="d"></div>');
				$('.character_items').empty();

				if ($(xml.reply).find('ryzomapi > * > equipment > *').length > 0) {

					$('.character_items').append('<div data-role="collapsible"><h2>Equipment</h2><ul class="character_items_equipment" data-role="listview" data-filter="true" data-filter-theme="c" data-divider-theme="d"></ul></div>');
					$('.character_items_equipment').empty();

					$(xml.reply).find('ryzomapi > * > equipment > *').each(function () {
						var img = 'sheetid=' + $(this).text();
						if ($(this).attr('color') !== '') {
							img += '&c=' + $(this).attr('color');
						}
						if ($(this).attr('quality') !== '') {
							img += '&q=' + $(this).attr('quality');
						}
						var name = $(this).text();
						name = name.substring(0, name.length - 6);
						if (itemNames[name] !== undefined) {
							$('.character_items_equipment').append('<li>' + itemNames[name] + '</li>');
						}
						//$('#character').append('<img src="http://api.ryzom.com/item_icon.php?' + img + '">');
					});
					$('.character_items_equipment').listview();
				}
				if ($(xml.reply).find('ryzomapi > * > bag > item').length > 0) {

					$('.character_items').append('<div data-role="collapsible"><h2>Bag</h2><ul class="character_items_bag" data-role="listview" data-filter="true" data-filter-theme="c" data-divider-theme="d"></ul></div>');
					$('.character_items_bag').empty();

					$(xml.reply).find('ryzomapi > * > bag > item').each(function () {
						var img = 'sheetid=' + $(this).children('sheet').text();
						if ($(this).children('craftparameters').children('color').text() !== '') {
							img += '&c=' + $(this).children('craftparameters').children('color').text();
						}
						if ($(this).children('quality').text() !== '') {
							img += '&q=' + $(this).children('quality').text();
						}
						if (($(this).children('stack').text() !== '') && ($(this).children('stack').text() !== '1')) {
							img += '&s=' + $(this).children('stack').text();
						}
						var name = $(this).children('sheet').text();
						name = name.substring(0, name.length - 6);
						if (itemNames[name] !== undefined) {
							var q = $(this).children('stack').text();
							if (q !== '') {
								q += 'x ';
							}
							$('.character_items_bag').append('<li>' + q + itemNames[name] + '</li>');
						}
						//$('#character').append('<img src="http://api.ryzom.com/item_icon.php?' + img + '">');
					});
					$('.character_items_bag').listview();
				}
				if ($(xml.reply).find('ryzomapi > * > room > item').length > 0) {

					$('.character_items').append('<div data-role="collapsible"><h2>Room</h2><ul class="character_items_room" data-role="listview" data-filter="true" data-filter-theme="c" data-divider-theme="d"></ul></div>');
					$('.character_items_room').empty();

					$(xml.reply).find('ryzomapi > * > room > item').each(function () {
						var img = 'sheetid=' + $(this).children('sheet').text();
						if ($(this).children('craftparameters').children('color').text() !== '') {
							img += '&c=' + $(this).children('craftparameters').children('color').text();
						}
						if ($(this).children('quality').text() !== '') {
							img += '&q=' + $(this).children('quality').text();
						}
						if (($(this).children('stack').text() !== '') && ($(this).children('stack').text() !== '1')) {
							img += '&s=' + $(this).children('stack').text();
						}
						var name = $(this).children('sheet').text();
						name = name.substring(0, name.length - 6);
						if (itemNames[name] !== undefined) {
							var q = $(this).children('stack').text();
							if (q !== '') {
								q += 'x ';
							}
							$('.character_items_room').append('<li>' + q + itemNames[name] + '</li>');
						}
						//$('#character').append('<img src="http://api.ryzom.com/item_icon.php?' + img + '">');
					});
					$('.character_items_room').listview();
				}
				if ($(xml.reply).find('ryzomapi > * > pets > *').length > 0) {
					//$('#character').append('<h2>Pets</h2>');
					$(xml.reply).find('ryzomapi > * > pets > *').each(function () {
						var index = $(this).attr('index');

						$('.character_items').append('<div data-role="collapsible"><h2>Animal ' + $(this).attr('index') + '</h2><ul class="character_items_animal_' + index + '" data-role="listview" data-filter="true" data-filter-theme="c" data-divider-theme="d"></ul></div>');
						$('.character_items_animal_' + index).empty();

						if ($(this).find('inventory > item').length > 0) {
							$(this).find('inventory > item').each(function () {
								var img = 'sheetid=' + $(this).children('sheet').text();
								if ($(this).children('craftparameters').children('color').text() !== '') {
									img += '&c=' + $(this).children('craftparameters').children('color').text();
								}
								if ($(this).children('quality').text() !== '') {
									img += '&q=' + $(this).children('quality').text();
								}
								if (($(this).children('stack').text() !== '') && ($(this).children('stack').text() !== '1')) {
									img += '&s=' + $(this).children('stack').text();
								}
								var name = $(this).children('sheet').text();
								name = name.substring(0, name.length - 6);
								if (itemNames[name] !== undefined) {
									var q = $(this).children('stack').text();
									if (q !== '') {
										q += 'x ';
									}
									$('.character_items_animal_' + index).append('<li>' + q + itemNames[name] + '</li>');
								}
								//$('#character').append('<img src="http://api.ryzom.com/item_icon.php?' + img + '">');
							});
						}
						$('.character_items_animal_' + index).listview();
					});
				}
				$('.character_items').collapsibleset();
			} else if (urlGet('action') === 'ecalc') {
				var stats = {};
				var tmp = 0;
				var tmp_comp = 0;
				$('#indexPage #character').append('<h3>' + $(xml.reply).find('ryzomapi > * > name').text() + ' max equipment levels</h3>');

				stats.max = 0;
				$(xml.reply).find('ryzomapi > * > skills > *').each(function () {
					var value = Math.floor($(this).text());
					if (stats.max < value) {
						stats.max = value;
					}
				});
				stats.constitution = parseInt($(xml.reply).find('ryzomapi > * > characteristics > constitution').text());
				stats.strength = parseInt($(xml.reply).find('ryzomapi > * > characteristics > strength').text());
				stats.intelligence = parseInt($(xml.reply).find('ryzomapi > * > characteristics > intelligence').text());
				stats.balance = parseInt($(xml.reply).find('ryzomapi > * > characteristics > wellbalanced').text());

				if (stats.max > 0) {
					tmp = (stats.max + 25);
					if (tmp > 250) {
						tmp = 250;
					}
				} else {
					tmp = 'Not accessable';
				}
				$('#indexPage #character').append('<p>Light armor: ' + tmp + '</p>');

				if ((stats.constitution > 0) && (stats.max > 0)) {
					tmp = Math.floor(stats.constitution * 1.5);
					if (tmp > 250) {
						tmp = 250;
					}
					tmp_comp = (stats.max + 25);
					if (tmp_comp > 250) {
						tmp_comp = 250;
					}
					tmp = Math.min(tmp, tmp_comp);
				} else {
					tmp = 'Not accessable';
				}
				$('#indexPage #character').append('<p>Medium armor: ' + tmp + '</p>');

				if (stats.constitution > 0) {
					tmp = (stats.constitution + 10);
					if (tmp > 250) {
						tmp = 250;
					}
				} else {
					tmp = 'Not accessable';
				}
				$('#indexPage #character').append('<p>Heavy armor: ' + tmp + '</p>');

				if (stats.constitution > 0) {
					tmp = (stats.constitution + 10);
					if (tmp > 250) {
						tmp = 250;
					}
				} else {
					tmp = 'Not accessable';
				}
				$('#indexPage #character').append('<p>Shields: ' + tmp + '</p>');

				if (stats.constitution > 0) {
					tmp = Math.floor(stats.constitution * 1.5);
					if (tmp > 250) {
						tmp = 250;
					}
					tmp_comp = (stats.constitution + 10);
					if (tmp_comp > 250) {
						tmp_comp = 250;
					}
					tmp = Math.min(tmp, tmp_comp);
				} else {
					tmp = 'Not accessable';
				}
				$('#indexPage #character').append('<p>Bucklers: ' + tmp + '</p>');

				if (stats.max > 0) {
					tmp = (stats.max + 25);
					if (tmp > 250) {
						tmp = 250;
					}
				} else {
					tmp = 'Not accessable';
				}
				$('#indexPage #character').append('<p>Jewels: ' + tmp + '</p>');

				if (stats.strength > 0) {
					tmp = (stats.strength + 10);
					if (tmp > 250) {
						tmp = 250;
					}
				} else {
					tmp = 'Not accessable';
				}
				$('#indexPage #character').append('<p>Melee weapons: ' + tmp + '</p>');

				if (stats.intelligence > 0) {
					tmp = (stats.intelligence + 10);
					if (tmp > 250) {
						tmp = 250;
					}
				} else {
					tmp = 'Not accessable';
				}
				$('#indexPage #character').append('<p>Magic amplifiers: ' + tmp + '</p>');

				if (stats.balance > 0) {
					tmp = (stats.balance + 10);
					if (tmp > 250) {
						tmp = 250;
					}
				} else {
					tmp = 'Not accessable';
				}
				$('#indexPage #character').append('<p>Ranged weapons: ' + tmp + '</p>');
			} else {
				$('#indexPage #character').append('<h3>' + $(xml.reply).find('ryzomapi > * > name').text() + '</h3>');
				$('#indexPage #character').append('<a href="' + document.location.search + '&action=inventory" data-role="button" class="ryzomButton">Inventory</a>');
				$('#indexPage #character').append('<a href="' + document.location.search + '&action=ecalc" data-role="button" class="ryzomButton">Max equipment levels</a>');
				$('.ryzomButton').button();
			}
		}
	} else {
		$('#indexPage #character').html('<h1>Characters</h1>');

		var storage = window.localStorage;
		var settings = JSON.parse(storage.getItem('settings'));
		var foundChars = false;
		if (settings.apiKeys !== undefined) {
			$('#indexPage #character').append('<ul class="apiKeysList" data-role="listview">\
		</ul>');
			$('.apiKeysList').empty();
			for (var i in settings.apiKeys) {
				var type = settings.apiKeys[i].substring(0, 1);
				if (type === 'c') {
					var res = RyzomApi.getCharacter(settings.apiKeys[i]);
					var html = '<li>';
					foundChars = true;

					html += '<a href="?page=character&key=' + settings.apiKeys[i] + '">';
					html += '<h3>Character: ' + $(res.reply).find('ryzomapi > * > name').text() + '</h3>';
					html += '<p>Modules: ' + $(res.reply).find('ryzomapi > *').attr('modules') + '</p>';
					html += '<p class="key" style="display: none;">' + $(res.reply).find('ryzomapi > * > name').text() + ': ' + $(res.reply).find('ryzomapi > *').attr('modules') + '</p>';
					html += '</ul>';

					$('.apiKeysList').append(html);
				}
			}
			if (foundChars === true) {
				$('.apiKeysList').listview();
			}
		}
		if (foundChars === false) {
			$('#indexPage #character').append('<p>No character keys added.</p>');
		}
	}
}

/************************************************************\
|                      Season Change                         |
\************************************************************/
var loadSeasonchangePage = function () {
	(function updateTime () {
		if (document.location.search === '?page=seasonchange') {
			var xml = RyzomApi.getSeasonChange();
			var serverTick = parseInt($(xml.reply).find('server_tick').text());
			var created = parseInt($(xml.reply).find('cache').attr('created'));

			var ryzomTime = new RyzomTime(serverTick, created);

			var apiMinutesLeftInSeason = 6480 - (ryzomTime.getDayOfSeason() * 72) - ((ryzomTime.getTimeOfDay() * 3));
			/*
			 * Seems like the tick runs about five - eight minutes slow during a season.
			 * So we need to add five minutes. (Better to be early than late).
			 */
			apiMinutesLeftInSeason += (apiMinutesLeftInSeason / 6480) * 5;

			var apiNextSeasonChange = (new Date().getTime() / 1000) + (apiMinutesLeftInSeason * 60);
						
			var nextSeasonChange = new Date(parseInt(apiNextSeasonChange * 1000));
//			console.log(parseInt(apiNextSeasonChange * 1000));

			function secondsToHm (sec) {
				sec = Number(sec);
				var d = Math.floor(sec / 86400);
				var h = Math.floor(sec % 86400 / 3600);
				var m = Math.floor(sec % 3600 / 60);
				var s = Math.floor(sec % 3600 % 60);

				var ret = '';
				ret += '<h1>' + d + " day" + (d !== 1 ? 's' : '') + '</h1>';
				ret += '<h1>' + h + " hour" + (h !== 1 ? 's' : '') + '</h1>';
				ret += '<h1>' + m + " minute" + (m !== 1 ? 's' : '') + '</h1>';
				ret += '<h1>' + s + " second" + (s !== 1 ? 's' : '') + '</h1>';
				return ret;
			}

			$('#indexPage .article').html('<h1>Season change</h1>');
			$('#indexPage .article').append('<p>' + nextSeasonChange + '</p>');
			console.log(apiMinutesLeftInSeason * 60);
			$('#indexPage .article').append('<h2>Time until season change:</h2>' + secondsToHm(parseInt(apiMinutesLeftInSeason * 60)));

			setTimeout(updateTime, 1000);
		}
	})();
}

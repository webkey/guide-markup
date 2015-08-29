/* placeholder */
function placeholderInit(){
	$('[placeholder]').placeholder();
}
/* placeholder end */

/* yandexMap */
function yandexMap(){
	var mapYandex = $('.location-map');
	if ( mapYandex.length ) {
		mapYandex.each(function(index){
			var obj = $(this);
			var objIndex = index + 1;
			var className = obj.attr('class');
			obj.attr('id', 'map-'+objIndex);
			var id = obj.attr('id');
			var latitude = obj.data('latitude');
			var longitude = obj.data('longitude');
			var zoom = obj.data('zoom');
			ymaps.ready(function () {
				// Create map
				var myMap = new ymaps.Map(id, {
					center: [latitude, longitude],
					zoom: zoom,
					scrollwheel: false
				});
				var myPlacemark = new ymaps.Placemark([latitude, longitude],{
					//hintContent: 'Name',
					//help_hint: 'Name',
					//balloonContent: '<div>Name</div>',
					balloonContentHeader: "Балун метки",
					balloonContentBody: "Содержимое <em>балуна</em> метки",
					balloonContentFooter: "Подвал",
					hintContent: "Хинт метки"
				}, {
					iconImageHref: './img/map-pin.png',
					iconImageSize: [35, 54],
					iconImageOffset: [-19, -53]
				});
				// Add buttons and placemarks
				myMap.controls.add('zoomControl', {top: '10px', left:'10px', height: '50px'});
				myMap.geoObjects.add(myPlacemark);
			});
		});
	}
	var mainMapYandex = $('.main-map');
	if ( mainMapYandex.length ) {
		mainMapYandex.each(function(index){
			var obj = $(this);
			var objIndex = index + 1;
			var className = obj.attr('class');
			obj.attr('id', 'map-'+objIndex);
			var id = obj.attr('id');
			var latitude = obj.data('latitude');
			var longitude = obj.data('longitude');
			var zoom = obj.data('zoom');
			ymaps.ready(function () {
				// Create map
				var myMap = new ymaps.Map(id, {
					center: [latitude, longitude],
					zoom: zoom,
					scrollwheel: false
				});
				var myPlacemark = new ymaps.Placemark([latitude, longitude],{
					balloonContentHeader: "Балун метки",
					balloonContentBody: "Содержимое <em>балуна</em> метки",
					balloonContentFooter: "Подвал",
					hintContent: "Хинт метки"
				}, {
					iconImageHref: './img/map-pin.png',
					iconImageSize: [71, 108],
					iconImageOffset: [-37, -106]
				});
				// Add buttons and placemarks
				myMap.controls.add('zoomControl', {top: '10px', left:'10px', height: '50px'});
				myMap.geoObjects.add(myPlacemark);
			});
		});
	}
}
/* yandexMap */

/* fancybox */
function fancybox(){
	/*default popup*/
	var popup = $('.popup-open');
	if (popup.length) {
		popup.fancybox({
			wrapCSS: 'popup-default',
			padding: 0,
			openEffect: 'none',
			closeEffect: 'none'
		});
	}
	/*change map popup*/
	var changeRunPopupOpen = $('.change-popup-open');
	if (changeRunPopupOpen.length) {
		changeRunPopupOpen.fancybox({
			wrapCSS: 'change-run-popup-wrap',
			padding: 0,
			openEffect: 'elastic',
			closeEffect: 'elastic'
		});
	}
}
/* fancybox end */

/* checkbox/radiobox */
function checkbox(){
	$('.def-ch').checkbox({
		cls:'jquery-checkbox'
	});
	$('.def-radio').checkbox({
		cls:'jquery-radiobox'
	});
}
/* checkbox/radiobox end */

/*initial scrollpanel*/
function initScrollpanel(scrollpanelElement) {
	//var scrollpanelElement = $(".scrollpanel");
	scrollpanelElement.customScrollbar({
		skin: "default-skin",
		hScroll: false,
		updateOnWindowResize: true
	});
	scrollpanelElement.on("customScroll", function(event, scrollData) {
		if(scrollData.scrollPercent > 99){
			$(event.currentTarget).addClass('direction-down');
		} else {
			$(event.currentTarget).removeClass('direction-down');
		}
	});
	$('.scroll-bar.vertical').each(function () {
		var currentScrollBar = $(this);
		if (currentScrollBar.is(':hidden')){
			currentScrollBar.closest('.scrollable').addClass('direction-down');
		}
	})
}
function initScrollpanelForTabs(scrollpanelElement) {
	scrollpanelElement.customScrollbar({
		skin: "default-skin",
		hScroll: false,
		updateOnWindowResize: true
	});
	scrollpanelElement.on("customScroll", function(event, scrollData) {
		if(scrollData.scrollPercent > 99){
			$(event.currentTarget).addClass('direction-down');
		} else {
			$(event.currentTarget).removeClass('direction-down');
		}
	});
	var scrollBar = scrollpanelElement.find('.scroll-bar.vertical');
	$.each(scrollBar, function () {
		var currentScrollBar = $(this),
			parentScrillbar = currentScrollBar.closest('.scrollable');
		parentScrillbar.removeClass('direction-down');
		if (currentScrollBar.is(':hidden')){
			parentScrillbar.addClass('direction-down');
		}
	});
}
/*initial scrollpanel end*/

/*open/close additional panels*/
function openAddPanel() {
	var hideElement = $('.run-specification, .run-specification-item, .additional-panel');
	hideElement.hide(0);
	$('body').on('click', '[data-open]', function (e) {
		e.preventDefault();
		var currentBtn = $(this),
			dataOpen = currentBtn.data('open'),
			addPanel = $('#'+dataOpen);
		if (currentBtn.attr('data-text-close') && addPanel.is(':visible')) {
			addPanel.fadeOut(0, function () {
				currentBtn.find('.text-inner').text(currentBtn.data('text-open'));
				currentBtn.removeClass('opened');
				//console.warn("BOOO!");
			});
			return;
		}
		if (!addPanel.is(':hidden')) { return; }
		if (currentBtn.attr('data-text-close') && !addPanel.is(':visible')) {
			currentBtn.addClass('opened');
			currentBtn.find('.text-inner').text(currentBtn.data('text-close'));
		}
		addPanel.parent().fadeIn(0, function () {
			addPanel.siblings().filter('*:not(".additional-panel")').hide(0);
			addPanel.fadeIn(0, function () {
				if(addPanel.hasClass('run-specification-item')){
					heightTabs(addPanel.find('.tabs'));
				}
				initScrollpanelForTabs(addPanel.find('.tabs').children('div'))
			});
		});
	});
	$('body').on('click', '.run-specification-title', function (e) {
		e.preventDefault();
		$(this).closest('.additional-panel').hide(0);
	})
}
/*open/close  additional panels end*/

/*menu padding size*/
function paddingSize(){
	var boxTopHeight = $('.js-box-top').outerHeight(),
		boxBottomHeight = $('.js-box-bottom').outerHeight();
	$('.js-box-center').css({
		'padding-top': boxTopHeight,
		'padding-bottom': boxBottomHeight
	});
}
/*menu padding size end*/

/*height tabs*/
function heightTabs(tabs){
	if(!tabs.length){return;}
	$.each(tabs, function () {
		tabs = $(this);
		var parentItem = tabs.closest('.run-specification-item');
		if (parentItem.is(':hidden')){return;}
		var tabsOffsetTop = tabs.offset().top,
			footerOffsetTop = parentItem.find('.run-specification-footer').offset().top,
			paddingBottom = tabs.data('padding-bottom'),
			paddingTop = tabs.data('padding-top');
		tabs.css('height', footerOffsetTop - tabsOffsetTop - paddingBottom - paddingTop);
		tabs.closest('.tab-wrap').tabs( "refresh" );
	})
}
/*height tabs end*/

/*tabs initial*/
function tabInit(){
	var tabsWrapper = $(".tabs-wrap");
	if (!tabsWrapper.length) {return;}
	tabsWrapper.tabs({
		//active: 2,
		//show: { effect: "fade", duration: 300 },
		//hide: { effect: "fade", duration: 300 },
		create: function( event, ui ) {
			currentTabPanel($(ui.panel));
			if($(ui.panel).is(':visible')){
				initScrollpanelForTabs($(ui.panel));
			}
		},
		activate: function( event, ui ) {
			currentTabPanel($(ui.newPanel), $(ui.oldPanel));
			if($(ui.newPanel).is(':visible')){
				initScrollpanelForTabs($(ui.newPanel));
			}
		}
	});

	tabsWrapper.tabs( "refresh" );
	function currentTabPanel(current, old){
		if(current === undefined){ return; }
		current.addClass('current-panel');
		if(old === undefined){ return; }
		old.removeClass('current-panel');
	}
}
/*tabs initial end*/

/*routes types*/
function routesTypes(){
	var routesBox = $('.routes-types');
	if (!routesBox.length) { return; }
	routesBox.on('click', '.btn-map', function(){
		var currentBtn = $(this),
			parentItem = currentBtn.closest('li');

		if(parentItem.hasClass('active')) {return;}

		var distance = parentItem.data('distance'),
			time = parentItem.data('time'),
			price = parentItem.data('price'),
			wrapper = currentBtn.closest('.routes-types'),
			tooltip = wrapper.find('.info-tooltip-list');

		wrapper.find('.btn-map').closest('li').removeClass('active');
		tooltip.addClass('change', function () {
			setTimeout(function () {
				tooltip.find('.tp-distance').text(distance);
				tooltip.find('.tp-time').text(time);
				tooltip.find('.tp-price').text(price);
				parentItem.addClass('active');
				tooltip.removeClass('change');
			}, 200)
		});
	})
}
/*routes types end*/

/** ready/load/resize document **/

$(document).ready(function(){
	placeholderInit();
	yandexMap();
	fancybox();
	checkbox();
	routesTypes();
	openAddPanel();
});
$(window).load(function(){
	heightTabs($('.run-specification-info .tabs'));
	paddingSize();
	tabInit();
	initScrollpanel($(".scrollpanel"));
});
$(window).resize(function () {
	heightTabs($('.run-specification-info .tabs'));
});
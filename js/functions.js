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
			//console.log(objIndex);
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
			//console.log(objIndex);
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
}
/* fancybox end */

/*initial scrollpanel*/
function initScrollpanel() {
	var scrollpanelElement = $(".scrollpanel");
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
}
/*initial scrollpanel end*/

/*menu padding size*/
function paddingSize(){
	var boxTopHeight = $('.js-box-top').outerHeight(),
		boxBottomHeight = $('.js-box-bottom').outerHeight();
	console.log(boxBottomHeight);
	$('.js-box-center').css({
		'padding-top': boxTopHeight,
		'padding-bottom': boxBottomHeight
	});
}
/*menu padding size end*/

/*tabs initial*/
function tabInit(){
	$(function() {
		$( ".tabs-wrap" ).tabs({
			//active: 2,
			//show: { effect: "fade", duration: 300 },
			//hide: { effect: "fade", duration: 300 },
			create: function( event, ui ) {
				currentTabPanel($(ui.panel));
				initScrollpanelForTabs($(ui.panel));
			},
			activate: function( event, ui ) {
				currentTabPanel($(ui.newPanel), $(ui.oldPanel));
				initScrollpanelForTabs($(ui.newPanel));
			}
		});
		function currentTabPanel(current, old){
			if(current === undefined){ return; }
			current.addClass('current-panel');
			if(old === undefined){ return; }
			old.removeClass('current-panel');
		}
	});
}
/*tabs initial end*/

/*height tabs*/
function heightTabs(){
	$('.run-specification-info .tabs').height('100');
}
/*height tabs end*/

/** ready/load/resize document **/

$(document).ready(function(){
	placeholderInit();
	yandexMap();
	fancybox();
	tabInit();
});
$(window).load(function(){
	//heightTabs();
	paddingSize();
	initScrollpanel();
});
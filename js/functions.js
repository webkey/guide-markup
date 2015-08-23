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
	$('.scrollpanel').customScrollbar({
		skin: "default-skin",
		hScroll: false,
		updateOnWindowResize: true
	});
	//$(".scrollpanel").customScrollbar("resize", true)
}
/*initial scrollpanel end*/

/** ready/load/resize document **/

$(document).ready(function(){
	placeholderInit();
	yandexMap();
	fancybox();
	initScrollpanel();
});
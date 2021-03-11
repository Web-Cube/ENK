var map = {
	
	load: () => {
		var map_load = false;
		
		function map_create() {
			map_load = true
			$.getScript( 'https://api-maps.yandex.ru/2.1/?lang=ru_RU', function( data, textStatus, jqxhr ) {
				ymaps.ready(function () {
					$('.js-map').each(function() {

						var position1 = $(this).data('len');
						var position2 = $(this).data('lng');

						let len = Number(position1), lng = Number(position2), thisID = $(this).attr('id');
						var myMap = new ymaps.Map(thisID, {
							// 
							center: [len, lng],
							zoom: 16,
							controls: []
						}, {
							searchControlProvider: 'yandex#search'
						}),

						myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
						}, {
							iconLayout: 'default#image'
						});

						myMap.geoObjects.add(myPlacemark);
						myMap.behaviors.disable('scrollZoom');
						myMap.controls.remove('trafficControl').remove('searchControl').remove('typeSelector').remove('geolocationControl').remove('fullsxreenControl').remove('rullerControl');

						myMap.controls.add('zoomControl', {
							float: 'none',
							position: {
								right: 10,
								top: 50
							}
						});

						myMap.container.fitToViewport();				
					})			

				});
			});  
		}
		
		map_create();
		
	},

	init: () => {
		
		map.load();
		
	}
}

export { map }
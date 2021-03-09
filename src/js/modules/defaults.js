var defaults = {

	events: () => {
		$('.js-main-item').mouseover(function(){
			let index = $(this).index();
			$('.js-main-slide.is-active').removeClass('is-active');
			$('.js-main-slide:eq(' + index + ')').addClass('is-active');
			
		}).mouseleave(function(){
			$('.js-main-slide.is-active').removeClass('is-active');
			$('.js-main-slide:first-child').addClass('is-active');
		})
	},
	
	header: (e) => {
		
		let header = $(e.currentTarget).closest('.js-header');
			
		header.toggleClass('is-active')
			
	},

	init: () => {

		defaults.events();
		
		$(document).on('click', '.js-burger', defaults.header);

	}
}

export { defaults }
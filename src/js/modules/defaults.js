var defaults = {

	events: () => {

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
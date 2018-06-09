$(document).ready(function() {
	$("#my-menu").mmenu({
		"extensions": [
			"pagedim-black",
			"position-front",
			"border-none"
		 ],
		 "navbar": {
			 "title": '<img src="./img/Logo.png" alt="roman tihiy">'
		 },
		 "backButton": {
				close: true
	 }
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:start', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

	$(".my-button").click(function() {
			api.close();
	});

	$('.grid').masonry({
		// options
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
  	percentPosition: true
	});
});
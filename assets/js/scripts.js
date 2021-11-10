/* ============================================================

 Theme Name: Consultancy Built For Our Globe
 Theme URI: http://
 Description: The Consultancy Built For Our Globe Template
 Author: Landing Page
 Author URI: 
 Version: 1.0 

============================================================== */
 
$(function() {

    "use strict";// this function is executed in strict mode

	 
	
	/* --------------------------- */
	/*  1. wow animate JS
	/* --------------------------- */
	new WOW().init();
	
	/* --------------------------- */
	/*  2. YouTube video click box JS
	/* --------------------------- */   
	$('.video-v').magnificPopup({ 
	  type: 'iframe'
	  // other options
	});
	
	/* --------------------------- */
	/*  3. testimon slider JS
	/* --------------------------- */  
	$('.services-slider').owlCarousel({
		loop:true,
        margin: 0,
        autoplay:true,
        smartSpeed:600,
		dots: false,
		nav:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		} 
	});
	/* --------------------------- */
	/*  4. testimon slider JS
	/* --------------------------- */  
	$('.about-testi-slider').owlCarousel({
		loop:true,
		navText:false, 
		autoplay: 3000,
		nav:false,
		items:3,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});
	
	/* --------------------------- */
	/*  5. testimon slider JS
	/* --------------------------- */  
	$('#container').imagesLoaded( function() {
	  	var $grid = $('.portfolio-grid').isotope({
		  itemSelector: '.portfolio-grid-item',
		  percentPosition: true,
		  masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: 1
		  }
		});

		// filter items on button click
		$('.filter-button-group').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});
		
		//for menu active class
		$('.portfolio-button button').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});
	});
	 
	/* --------------------------- */
	/*  6. testimon slider JS
	/* --------------------------- */  
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
	
	 
	
});
 
$(document).ready(function() {

    var owl = $('.header .owl-carousel'); 
    // Slider owlCarousel
    $('.fullslider').owlCarousel({
        items: 1,
        loop:true,
        margin: 0,
        autoplay:true,
		dots: false,
        smartSpeed:600
    }); 

    owl.on('changed.owl.carousel', function(event) {
        var item = event.item.index - 2;     
        $('h2').removeClass('animated fadeInLeft');
        $('h1').removeClass('animated fadeInRight'); 
        $('.butn').removeClass('animated zoomIn');
        $('.owl-item').not('.cloned').eq(item).find('h2').addClass('animated fadeInLeft');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInRight'); 
        $('.owl-item').not('.cloned').eq(item).find('.butn').addClass('animated zoomIn');
    });

});
	 
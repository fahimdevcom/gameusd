$(document).ready(function(){
	jQuery('.scroll a, .scroll').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

		  var target = jQuery(this.hash);
		  target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			jQuery('html,body').animate({
			  scrollTop: target.offset().top -0
			}, 500);
			return false;
		  }
		}
	});
	
	var html = '<button class="menu-has-child-button"><i class="fas fa-chevron-down"></i></button>';
    $(".mobile-bar-admin-ul .menu-item-has-children,.footer_menu_box_main_menu .menu-item-has-children").prepend(html);
	
	$('body').on('click', '.menu-item-has-children button', function() {
		$(this).siblings('ul').slideToggle(300);
		$(this).toggleClass('menu-has-child-button-active');
	});
	
	$(".header-mobile-menu-trigger").click(function(){
		$("body").addClass("body-mobile");
		$(".black-bg").fadeIn('400').promise().done(function(){
			$("#mobile-product-menu-remove-left").show();
			$("#mobile-menu-bar-left").css('margin-left', '0');
		});
	});

	$(".remove-all").click(function(){
		$(".black-bg").fadeOut('400');
		$("body").removeClass("body-mobile");
		$(".mobile-bar-menu-remove").hide();
		$("#mobile-menu-bar-right").css('margin-right', '-80%');
		$("#mobile-menu-bar-left").css('margin-left', '-80%');
		$(".sub_form_popup_area").hide();
	});
	
	
	var header = $(this).scrollTop();
	if (header > 1) {
			$(".header_area").addClass('h_active');
		  } else {
			$(".header_area").removeClass('h_active');
		  }

	$(window).scroll(function() {
		var headerscroll = $(this).scrollTop();
		  if (headerscroll > 1) {
			$(".header_area").addClass('h_active');
		  } else {
			$(".header_area").removeClass('h_active');
		  }
	});
	
	$(window).scroll(function() {
		var headerscroll = $(this).scrollTop();
		  if (headerscroll > 500) {
			$(".scrolltotop").show();
		  } else {
			$(".scrolltotop").hide();
		  }
	});
	
	$('body').on('click', '.single_faq_title', function() {
		$(this).siblings('div').slideToggle(300);
		$(this).toggleClass('active_faq');
	});
	
});
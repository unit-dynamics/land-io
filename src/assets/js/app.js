$(document).foundation();

//  Table of Contents:
//
//   1. Nav Section
//		a. Mobile Nav section
//   2. Testimonial Section
//   3. Subscription Section
//   4. Video Section

//-----------------------------



// 1. Nav Section
//----------------

// Nav: Search bar animation
var $search = $('.nav__search__input');
var $menu = $('.nav__menu');

$('.nav__search__icon').on("click", function() {
	$('.nav__search__input').toggleClass("search-show");
	$('.nav__menu').toggleClass("menu-hide");
})

// Nav: User profile box animation
$('.nav__user-avatar').on("click", function() {
	$('.nav__profile-box').toggleClass("nav__profile-box-is-active");
})

// Close profile-box if clicked outside the element
$('.landing').on("click", function() {
	$('.nav__profile-box').removeClass("nav__profile-box-is-active");
})



// 1.a Nav (Mobile) Section
//----------------

$('.nav__menu-mobile-btn').on("click", function() {
	$('.nav-mobile').toggleClass("is-active");
	$('.nav__menu-mobile-btn').toggleClass("close");
});





// 2. Testimonial Section
//--------------------

// Test. carousel animation 
var $cards = $('.test__card'),
	cardsLength = $cards.length,
	$users = $('.user-img')

function nextTestimonial(){
	if ($cards.filter('.card-is-active').index() < cardsLength -1) {

		$users.filter('.img-is-active').next().addClass('img-is-active').siblings().removeClass('img-is-active');
		$cards.filter('.card-is-active').next().addClass('card-is-active').siblings().removeClass('card-is-active');
	
	}else{

		$users.first().addClass('img-is-active').siblings().removeClass('img-is-active');
		$cards.first().addClass('card-is-active').siblings().removeClass('card-is-active');
	}

};

// Set the carousel delay
var carouselInterval = setInterval(function(){ nextTestimonial() }, 4500);

$('.user-img').on("click", function() {

	// Pause carousel
	clearInterval(carouselInterval);
	carouselInterval = setInterval(function(){ nextTestimonial() }, 4500);

	var userId = $(this).data("user");

	// Add / Remove classes to swtich to the selected user
	$(this).addClass('img-is-active').siblings().removeClass('img-is-active');
	$cards.eq(userId).addClass('card-is-active').siblings().removeClass('card-is-active');
})




// 3. Subscription Section
//--------------------

// Toggle default selected price on hover
$('.sub__card-container').hover(function() {
	$('.sub__card-professional').toggleClass('card-is-active');
})



// 4. Video Section
//--------------------

$('video').on('click', function() {

	// Fade in Video on play
	$(this).css('opacity', '1');

	if($(this).get(0).paused){
		$(this).get(0).play();

	}else{
		// Fade out video on Pause
		$(this).css('opacity', '0');
		$(this).get(0).pause();
	}
	
})
// © Code by T.RICKS, https://www.timothyricks.com/
// Copyright 2021, T.RICKS, All rights reserved.
// You have the license to use this code in your projects but not to redistribute it to others
function calculateScroll() {

	// Desktop
	let itemsInView = 1;
  let scrollSpeed = 1.2;
  
  if (window.matchMedia('(max-width: 479px)').matches) {
  
  	// Mobile Portrait
  	itemsInView = 1;
    scrollSpeed = 1.2;
    
  } else if (window.matchMedia('(max-width: 767px)').matches) {
  
  	// Mobile Landscape
    itemsInView = 1;
    scrollSpeed = 1.2;
    
  } else if (window.matchMedia('(max-width: 991px)').matches) {
  
  	// Tablet
    itemsInView = 2;
    scrollSpeed = 1.2;
    
  }
	let horizontalItem = $('.horizontal-item');
  let horizontalSection = $('.horizontal-section');
  let moveAmount = horizontalItem.length - itemsInView;
  let minHeight = (scrollSpeed * horizontalItem.outerWidth()) * horizontalItem.length;
  if (moveAmount <= 0) {
  	moveAmount = 0;
    minHeight = 0;
  } else {
  	horizontalSection.css('height', '200vh');
  }
  let moveDistance = horizontalItem.outerWidth() * moveAmount;
  $('html').css('font-size', moveDistance + 'px');
  horizontalSection.css('min-height', minHeight + 'px');
}
calculateScroll();
window.onresize = function(){ 
	calculateScroll();
}

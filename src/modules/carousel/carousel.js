import $ from 'jquery';
import 'owl.carousel';
import { App, Module } from '../../core';

class Quote_carousel extends Module {
	constructor(props) {
		super(props);
		this.target = $('.owl-carousel');
		this.run();
	}
	run() {
  	  	$(this.target).owlCarousel({
      		items: 1,
	      	loop: true,
	      	autoplay: true,
	      	stagePadding: 100,
	      	margin: 100,
	      	autoplayTimeout: 4000,
	      	autoplaySpeed: 1000,
	      	autoplayHoverPause: true
      	});		
	}
}

const carousel = new Quote_carousel("quotes-carousel");

export default carousel;
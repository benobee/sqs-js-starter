import $ from 'jquery';
import Trigger from './trigger';

/**
 *
 * @namespace scrollMap
 * @description store element points and check if
 * elements are visible
 *
*/ 

const Scrollmap = {
  init() {
    this.points = [];

    this.events();
  },
  add(el, callback) {

  	/* 
  	 * @desc add classname indicating element is intialized
    */
   
    const type = (typeof el);

    if (type === "string") {
        el = document.querySelectorAll(el);
    } else if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el.toArray();
    } else if ( type === "object" ) {
        el = [el];
    }

    el.forEach((item) => {
        const currentClass = item.getAttribute('class');

        item.setAttribute("class", currentClass + " on-scroll");

        const point = new Trigger(item, callback);

        this.points.push(point);
    });
  },
  elementInViewport(el, percetageOfElement) {

    /*
     * @desc check if element is in viewport
    */
   
    const rect = el.getBoundingClientRect();
   
    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[ 0 ];
    }

    // return (
    //     rect.top >= 0 &&
    //     rect.left >= 0 &&
    //     rect.bottom / 2 * percetageOfElement <= (window.innerHeight || document.documentElement.clientHeight) /*or $(window).height() */
    //     rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    // );
    
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.top + (rect.height * percetageOfElement) <= (window.innerHeight || document.documentElement.clientHeight ) /*or $(window).height() */
    );

  },
  checkVisible(point) {
    const targetElement = point.element;
    const viewport = this.elementInViewport(targetElement, point.surfaceVisible);

    if (viewport) {
      $(targetElement).addClass('is-visible');
      point.onTriggerIn();
      if (point.onTriggerIn) {
        point.onTriggerIn();
      }

    } else {
      $(targetElement).removeClass('is-visible');

      if (point.onTriggerOut) {
        point.onTriggerOut();
      }
    }
  },
  events() {
  	//initial check on page load to see if elements are visible
    $(window).bind('scroll load resize', () => {
      this.points.forEach((point) => {
        this.checkVisible(point);
      });
    });
  }
};

export default Scrollmap;
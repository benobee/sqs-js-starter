import $ from 'jquery';
import { Scrollmap, Trigger } from '../../core/scrollmap/index.js';
import { TweenMax } from "gsap";

/*
 *
 * @namespace animation
 * @description run and initialize animation 
 * handlers, search dom for trigger elements
 *
*/ 

const homepage = {
    init() {
        //this.test();
    },
    test() {
        const target = $('.juice');

        Scrollmap.add(target, {
            onTriggerIn() {
                $(this.element).css({
                    border: '50px solid black'
                });
            },
            onTriggerOut() {
                $(this.element).css({
                    border: '50px solid antiquewhite'
                });               
            },
            surfaceVisible: 0.5
        });
    }
};

export default homepage;


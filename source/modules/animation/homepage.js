import $ from 'jquery';
import { Scrollmap, Trigger } from '../../core/scrollmap/index.js';
import { TweenMax, Power2, TimelineLite } from "gsap";

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
        this.welcome();
        this.whyTrueSolarSouth();
        this.services();
        this.testimonials();
        this.products();
        this.team();
        this.partnerships();
    },
    welcome() {
        const target = $('#welcome .Index-page-content .sqs-layout');

        TweenMax.set(target, { opacity: 0, y: 100 });

        Scrollmap.add(target, {
            onTriggerIn() {
                TweenMax.to(target, 0.3, { opacity: 1, y: 0, delay: 1.4 });
            }
        });        
    },
    whyTrueSolarSouth() {
        const target = $('#why-true-south-solar .summary-item');

        TweenMax.set(target.find('.summary-thumbnail-container'), { opacity: 0 });
        TweenMax.set(target.find('.summary-content'), { opacity: 0, scale: 0.8 });

        Scrollmap.add(target, {
            onTriggerIn() {
                const content = $(this.element).find('.summary-content');

                const image = $(this.element).find('.summary-thumbnail-container');

                TweenMax.to(content, 0.6, { opacity: 1 });
                TweenMax.to(image, 0.4, { opacity: 1, scale: 1, delay: 0.3 });
            },
            surfaceVisible: 0.5
        });        
    },
    services() {
        const target = $('#services-intro .summary-item-list');

        TweenMax.set(target.find('.summary-item'), { opacity: 0 });

        Scrollmap.add(target, {
            onTriggerIn() {
                const summaryItems = $(this.element).find(".summary-item");

                TweenMax.staggerTo(summaryItems, 0.8, { opacity: 1 }, 0.1);
            },
            surfaceVisible: 0.5
        });
    },
    testimonials() {
        const target = $('#testimonials-intro .Index-page-content');

        TweenMax.set(target, { y: "100", opacity: 0 });

        Scrollmap.add(target, {
            onTriggerIn() {
                TweenMax.to(target, 0.3, { y: 0, opacity: 1 });
            },
            surfaceVisible: 0.5
        });
    },
    products() {
        const target = $('#products-intro .summary-item-list');

        TweenMax.set(target.find('.summary-item'), { opacity: 0 });

        Scrollmap.add(target, {
            onTriggerIn() {
                const summaryItems = $(this.element).find(".summary-item");

                TweenMax.staggerTo(summaryItems, 0.8, { opacity: 1 }, 0.1);
            }
        });        
    },
    team() {
        const target = $('#team-intro .Index-page-content');

        TweenMax.set(target, { y: "100", opacity: 0 });

        Scrollmap.add(target, {
            onTriggerIn() {
                TweenMax.to(target, 0.3, { opacity: 1, y: 0 });
            },
            surfaceVisible: 0.7
        });
    },
    partnerships() {
        const target = $('#partnerships .summary-item-list');

        TweenMax.set(target.find('.summary-item'), { opacity: 0 });

        Scrollmap.add(target, {
            onTriggerIn() {
                const summaryItems = $(this.element).find(".summary-item");

                TweenMax.staggerTo(summaryItems, 0.8, { opacity: 1 }, 0.1);
            },
            surfaceVisible: 0.5
        });        
    }
};

export default homepage;


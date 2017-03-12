import $ from 'jquery';
import { Scrollmap, Trigger } from '../../core/scrollmap/index.js';
import { TweenMax, Power2, TimelineLite } from "gsap";

const products = {
	init() {
		this.collection = $('#collection-58c07ee7cd0f68cc571c8464');
		this.indexPages();
		this.evenIndexPages();
		this.oddIndexPages();
	},
	indexPages() {
		const target = $(this.collection).find('.Index-page');

		TweenMax.set(target.find('.intrinsic'), { scale: 0.8, opacity: 0 });

		Scrollmap.add(target, {
			onTriggerIn() {
				const image = $(this.element).find('.intrinsic');

				TweenMax.to(image, 0.4, { opacity: 1, scale: 1 });
			},
			surfaceVisible: 0.5
		});
	},
	evenIndexPages() {
		const target = $(this.collection).find('.Index-page:nth-child(even)');

		TweenMax.set(target.find('p, .sqs-block-button-element--medium'), { x: -40, opacity: 0 });

		Scrollmap.add(target, {
			onTriggerIn() {
				const content = $(this.element).find('p, .sqs-block-button-element--medium');

				TweenMax.to(content, 0.4, { x: 0, opacity: 1, delay: 0.4 });
			},
			surfaceVisible: 0.5
		});
	},
	oddIndexPages() {
		const target = $(this.collection).find('.Index-page:nth-child(odd)');

		TweenMax.set(target.find('p, .sqs-block-button-element--medium'), { x: 40, opacity: 0 });

		Scrollmap.add(target, {
			onTriggerIn() {
				const content = $(this.element).find('p, .sqs-block-button-element--medium');

				TweenMax.to(content, 0.4, { x: 0, opacity: 1, delay: 0.4 });
			},
			surfaceVisible: 0.5
		});		
	}
};

export default products;
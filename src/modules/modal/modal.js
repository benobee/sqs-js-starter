import $ from 'jquery';
import { Component, Module } from "../../core";

class Modal_Popup extends Module {
	constructor(props) {
		super(props);
		this.$target = $('#products-intro');
		
		if (this.$target) {
			this.createModalInjectElement();
			this.cacheDOM();
			this.events();
		}
	}
	cacheDOM() {
		const $modal = $('#app-module-modal');

		this.modalContainer = $modal;
		this.modalBody = $modal.find('.modal-container');
		this.injectPoint = $modal.find('#modal-content-inject');
		this.closeButton = $modal.find('.close');
	}
	createModalInjectElement() {

		/*
		 * create the initial modal container and 
		 * injection id element on page load. Appends
		 * to the Site element contained in the body 
		*/

		const modalContainer = `
			<div id="app-module-modal" class="app-module-modal-container">
				<div class="modal-container">
					<div class="close">✕</div>
					<div id="modal-content-inject" class="modal-content"></div>
				</div>
			</div>
		`;

		$('.Site').append(modalContainer);
	}
	clearModal() {

		/*
		 * clear the HTML from inside the
		 * rendering area.
		*/

		$('#modal-content-inject').html('');
	}
	appendModal(content) {

		/*
		 * methods for cloning and appending content from 
		 * page content. Some content is hidden on the page
		 * within the summary blocks. 
		*/
	
		const title = $(content).find(".summary-title");
		const excerpt = $(content).find(".summary-excerpt");
		const logo = $(content).find(".summary-thumbnail-container");

		let html = [
			title,
			excerpt,
			logo
		];

		html = html.map((item, i) => {
			let itemHTML = {};

			if (item.length !== 0) {
				itemHTML = item[ 0 ].innerHTML;
			} else {
				itemHTML = "";
			}

			return itemHTML;
		});

		const link = $(html[ 0 ]).attr("href");

		const modalContent = Component `
			<div class="modal-inner">
				<div class="logo">${html[ 2 ]}</div>
				<div class="excerpt">${html[ 1 ]}</div>
				<div class="title"><a href="${link}">Learn More about ${$(title).html()}</a></div>
			</div>
		`;

		const target = document.getElementById('modal-content-inject');

		Component.render(modalContent, target);
	}
	closeModal() {
		/*
		 * sequence of events that happen when the modal
		 * is closed
		*/
	
		this.modalContainer.removeClass("active");
		this.clearModal();
		this.clearEvents();
	}
	modalEvents() {
		/*
		 * click on X or the modal container to close modal
		 * clicking on the modal itself is prevented from stop
		 * propagation
		*/
	
		$(this.closeButton).on("click", () => {
			this.closeModal();
		});
		
		$(this.modalContainer).on("click", () => {
			this.closeModal();
		});

		$(this.modalBody).on("click", (e) => {
			e.stopPropagation(); //prevent modal from closing when clicked on
		});
	}
	clearEvents() {
		$(this.closeButton).off();
		$(this.modalContainer).off();
		$(this.modalBody).off();
	}
	events() {
	    
	    /*
	     * look for sepcified content within the clicked
	     * elemnt and append to modal
	    */

		$(this.$target).find(".summary-item").on("click", (e) => {
			e.preventDefault();

			this.modalContainer.addClass("active");
			this.clearModal();
			this.appendModal(e.currentTarget);
			this.modalEvents();
		});
	}	
}

const modal = new Modal_Popup("modal");

export default modal;
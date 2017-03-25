import { Component } from '../../core';

class Modal {
	constructor() {
		this.age = "18";
		this.name = "modal";
		this.color = "red";
		this.content = Component `<div class="inner-content">${this.age}</div>`;
		this.container = Component `

			<modal id="rootModalParent" class="parent">
				<div class="inner-child">${this.color}</div>
				<div class="inner-child">${this.name}</div>
				<div class="inner-child">${this.content}</div>
			</modal>

		`;

		Component.render(this.container, '#page');
	}
}

const html = Component `<div></div>`;

console.log([html]);

export default Modal;
import { Component } from '../../core';
import * as data from '../../../data.json';

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

const items = data.items;


const list = Component `
	<div class="collection-list">${
		items.map((item) => {
			return `<div class="collection-item">${item.title}</div>`;
		})
	}</div>
`;

Component.render(list, '#page');

export default Modal;
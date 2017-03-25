class DOM_Methods {
	constructor(){
		this.methods = {
			addClass(className) {
				this.forEach((node) => {
					if (node.classList) {
						node.classList.add(className);
					}
				});
				return this;
			},
			removeClass(className) {
				this.forEach((node) => {
					node.classList.remove(className);
				});
				return this;
			},
			data(attributeName, value) {
				this.forEach((node) => {
					node.setAttribute(`data-${attributeName}`, value);
				});
				return this;
			},
			find(target) {
				let searchTarget = {};
				this.forEach((node) => {
					searchTarget = node.querySelectorAll(target);
				});
				return searchTarget
			},
			html(string) {
				this.forEach((node) => {
					node.innerHTML = string;
				});
				return this;
			},
			on(event, func) {
				this.forEach((node) => {
					node.addEventListener(event, func);
				});
			},
			append(element) {

			},
			ready(func) {
				this.forEach((node) => {
					node.addEventListener("DOMContentLoaded", func);
				});
			}			
		}
	}
}


class HTML_Element extends DOM_Methods {
	constructor(elem) {
		super();
		this.node = elem;
		this.node.isRendered = false;

		/* test if class name is found within body */
		if (this.node.length !== 0) {
			this.node.isRendered = true;
		}

		Object.assign(this.node, this.methods);
	}
}

const $ = (selector) => {
	let elem = [selector];
	
	const type = (typeof selector);

	if (type === "object") {
		elem = new HTML_Element(elem);
	} else if (type === "string") {
		elem = new HTML_Element(document.querySelectorAll(selector));
	} else {
		console.error("DOM: Not a valid selector. Must be a string selector (., #, *, etc.) or a dom element");
	}

	return elem.node;
};

export default $;
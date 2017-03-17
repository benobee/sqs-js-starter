class DOM_Element {
	constructor(elem) {
		this.root = elem;
	}
	addClass(className) {
		this.root.forEach((node) => {
			if (node.classList) {
				node.classList.add(className);
			}
		});

		return this;
	}
	removeClass(className) {
		this.root.forEach((item) => {
			item.classList.remove(className);
		});

		return this;		
	}
	data(attributeName, value) {
		this.root.forEach((item) => {
			item.setAttribute(`data-${attributeName}`, value);
		});		

		return this;
	}
	html(string) {
		this.root.forEach((item) => {
			item.innerHTML = string;
		});

		return this;
	}
	toArray() {
		return (
			this.root
		);
	}
}

const $ = (selector) => {
	let elem = {};
	
	const type = (typeof selector);

	if (type === "object") {
		const NodeList = [selector];

		elem = new DOM_Element(NodeList);

	} else if (type === "string") {
		const target = document.querySelectorAll(selector);

		elem = new DOM_Element(target);
	} else {
		console.error("DOM: Not a valid selector. Must be a string selector (., #, *, etc.)  or a dom element");
	}

	return elem;
};

export default $;
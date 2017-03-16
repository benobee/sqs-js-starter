const Util = {
    slugify(filterName) {

		/*
		 * @desc turn string into slug
		*/
	
		return filterName.toLowerCase().replace(/ /g, "-").replace(/-&-/g, "-");
    },
	isActive(selector) {
		/* test if class name is found within body */
		const elem = document.querySelectorAll(selector);

		let foundOnPage = false;

		if (elem.length !== 0) {
			foundOnPage = true;
		}

		return foundOnPage;
	},
	addClass(className) {
		
	},
	removeClass(className) {
		
	}
};

export default Util;
import $ from 'jquery';

class Trigger {
	constructor(element, options) {
		this.element = element;
		this.surfaceVisible = 1;

		if (options) {
			Object.assign(this, options);
		}
	}
	destroy() {
		this.events = null;
		this.element = null;
	}
}

export default Trigger;
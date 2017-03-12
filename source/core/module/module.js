import { App } from '../../core';

class Module {
	constructor() {
		App.subscribe("site-loaded", () => {
			
		});
	}
}

export default Module;
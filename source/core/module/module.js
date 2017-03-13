import { App } from '../../core';

class Module {
	constructor() {
		App.subscribe("app-loaded", (site) => {
			this.appLoaded = true;
		});
	}
}

export default Module;
import { Scrollmap, Router, Storage, App } from './source/core';
import * as modules from './source/modules';
import SQS from './source/sqs';

const css = require('./main.less');

class Site_Build {
	constructor() {
		this.Router = Router;
		this.Scrollmap = Scrollmap;
		this.Storage = Storage;
		this.Modules = modules;
		this.App = App;
		this.SQS = SQS;

		/* modules */
		Router.init();
		Scrollmap.init();

		App.subscribe("app-loaded", (site) => {
			console.log(site);
		});
	}
}

const Site = new Site_Build();

App.publish("app-loaded", Site);



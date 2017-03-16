import { Scrollmap, Router, Storage, App } from './src/core';
import * as modules from './src/modules';
import SQS from './src/sqs';
import $ from 'jquery';

const css = require('./main.less');

//build the site object
class Site_Build {
	constructor() {
		this.Router = Router;
		this.Modules = modules;
		this.Scrollmap = Scrollmap;
		this.db = Storage.db;
		this.App = App;
		this.SQS = SQS;

		//module inits
		Router.init();
		Scrollmap.init();

		//wait for app-loaded event
		App.subscribe("app-loaded", (site) => {
			console.log(this);
		});
	}
}

const Site = new Site_Build();

//publish app-loaded event
App.publish("app-loaded", Site);



import { Scrollmap, Router, Storage, App, $ } from './src/core';
import * as modules from './src/modules';
import SQS from './src/sqs';

const css = require('./main.less');

/*mock array */
const items = [
	{ 
		title: 'DOG STORY', 
		tags: ["Monkey, Lion, Sheep"],
		assetUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRmpJaTWLE_yk1yX1afD3l0gj3uJDPNgMCJHNx5NO8KAS5LyZY3" 
	},
	{ 
		title: 'CAT STORY', 
		tags: ["Lion, Sheep"],
		assetUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQm-niOUg-1PU8LA_1A5WBXigoUpDzeTvOpyivzm5fbARZyPzatqw" 
	},
	{ 
		title: 'PARROT STORY', 
		tags: ["Zebra, Sheep"],
		assetUrl: "http://yourshot.nationalgeographic.com/u/ss/fQYSUbVfts-T7pS2VP2wnKyN8wxywmXtY0-FwsgxoJBD4C1qJrqA8EfaP7jL8gZYg0MJlb9NNBxrHhmaSdwF/" 
	},
	{ 
		title: 'GHOST STORY', 
		tags: ["Bear, Sheep"],
		assetUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSv9pQHL64nevEUhhh1XC6v49HukH-DC-pqeeKA4whC6wZEMdBw" 
	},
	{ 
		title: 'BOAT STORY', 
		tags: ["Bear, Sheep, Murder"], 
		assetUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShhqRwDd6onpr-rw0LrIwRYdkMMTKU5R7SP38N2FKhP3r42rHL" 
	}
];

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

Scrollmap.add('.juice', {
	onTriggerIn() {
		$(this.element).data("position","left").addClass("left");
	},
	onTriggerOut() {
		$(this.element).data("position","right").removeClass("left").addClass("right");
	}
});


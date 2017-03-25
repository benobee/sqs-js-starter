import { Scrollmap, App_Router, App_Build } from './src/core';
import { Collection } from './src/core/storage/index';
import SQS from './src/sqs';
import { Modal } from './src/modules/ui';

//build the site object
class Site_Build {
	constructor() {
		this.app = new App_Build();
		this.router = new App_Router();
		this.isMobile = this.app.isMobile();
		this.ui = {
			modal: new Modal()
		}
		console.log(this);
	}
}

Scrollmap.add('.juice');

const Site = new Site_Build();

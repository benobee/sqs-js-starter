class App_Router {
	constructor() {
		this.params = this.getQueryParameters();
		this.routes = [];
		this.currentRoute = window.location.pathname;
		this.checkRoute();
	}
	getQueryParameters(str) {

        /* 
         * @desc get the query paramers from search and convert to object
        */
       
		return (str || document.location.search).replace(/(^\?)/, '').split("&").map(function(n) {
			n = n.split("=");
			n = this[ n[ 0 ] ] = n[ 1 ];
			
			return this;

		}.bind({}))[ 0 ];
	}
	go(pathName) {
		window.location.pathname = pathName;
	}
	route(pathName, controller) {
  		const route = {
  			pathName,
  			controller
  		};

	  	this.routes.push(route);
	}
	checkRoute() {
		this.routes.forEach((item) => {
			if (this.currentRoute === item.pathName) {
				item.controller();
			}
		});
	}
};

export default App_Router;


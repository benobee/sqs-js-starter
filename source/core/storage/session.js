/**
 *
 * @public
 * @description session store and retrieve
 *
 */

class Session_Object {
	constructor(key, value) {
		this.key = key;
		this.value = value;
	}
}

const Session = {
	init() {
		this.vars = [];
	},
	set(key, value) {
		sessionStorage.setItem(key, JSON.stringify(value));

		const Item = new Session_Object(key, value);
	
		this.vars.push(Item);
	},
	get(key) {
		const item = sessionStorage.getItem(key);

		return JSON.parse(item);
	}
};

export default Session;
/**
 *
 * @public
 * @description session store and retrieve
 *
 */

const Session = {
	set(key, value) {
		sessionStorage.setItem(key, JSON.stringify(value));
	},
	get(key) {
		const item = sessionStorage.getItem(key);

		return JSON.parse(item);
	}
};

export default Session;
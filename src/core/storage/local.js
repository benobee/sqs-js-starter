const local = {
	set(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	},
	get(key) {
		const item = localStorage.getItem(key);

		return JSON.parse(item);
	},
	remove(key) {
		localStorage.removeItem(key);
	}
};

export default local;
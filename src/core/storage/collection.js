class Collection {
	constructor(name) {
		this.name = name;
		this.verify();
	}
	verify() {
		const exists = this.get(this.name);

		if (!exists) {
			this.collection_id = this._id(this.name);
			this.items = [];

			this.create(this.name);
		}
	}
    create(key) {
    	localStorage.setItem(key, JSON.stringify(this));
    }
    _id() {
    	return '_' + (Date.now().toString(36) + Math.random().toString(36).substr(2, 5));
    }
	add(value) {
		const id = {_id: this._id()};

		Object.assign(value, id);
		const db = this.get(this.name);

		db.items.push(value);
		localStorage.setItem(this.name, JSON.stringify(db));
	}
	get(key) {
		const item = localStorage.getItem(key);

		return JSON.parse(item);
	}
	remove(key) {
		localStorage.removeItem(key);
	}
	store() {
		localStorage.setItem(this.name, JSON.stringify(this));
	}
}

export default Collection;
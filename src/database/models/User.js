const { log } = require("console");
const db = require("../db");

class User {
	#id;
	#name;
	#email;
	#password;
	#isActive;
	#roleId;
	static idCounter = 1;

	get id() {
		return this.#id;
	}

	get name() {
		return this.#name;
	}

	set name(name) {
		this.#name = name;
	}

	get email() {
		return this.#email;
	}

	set email(email) {
		this.#email = email;
	}

	get password() {
		return this.#password;
	}

	set password(password) {
		this.#password = password;
	}

	get isActive() {
		return this.#isActive;
	}

	set isActive(isActive) {
		this.#isActive = isActive;
	}

	get roleId() {
		return this.#roleId;
	}

	set roleId(roleId) {
		this.#roleId = roleId;
	}

	static create(data) {
		const user = { id: User.idCounter++, ...data };
		db.push(user);
		return data;
	}

	static find() {
		return db;
	}

	static findById(id) {
		return db.find((user) => user.id == id);
	}

	static update(id, data) {
		let index = db.findIndex((user) => user.id == id);
		if (index !== -1) {
			db[index] = { ...db[index], ...data };
			return db[index];
		} else {
			return null;
		}
	}

	static delete(id) {
		let index = db.findIndex((user) => user.id == id);
		if (index !== -1) {
			db.splice(index, 1);
			return true;
		} else {
			return false;
		}
	}
}

module.exports = User;

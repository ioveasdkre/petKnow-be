/**
 * Data Model Interfaces
 */

// import { Items } from './items.interface';

/**
 * In-Memory Store
 */

let items = {
	1: {
		id: 1,
		name: 'Play with the cats',
		price: 599,
		description: 'Tasty',
		image: 'https://cdn.auth0.com/blog/whatabyte/burger-sm.png',
	},
	2: {
		id: 2,
		name: 'Cleaning cat sands',
		price: 299,
		description: 'Cheesy',
		image: 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png',
	},
	3: {
		id: 3,
		name: 'Feed the cats',
		price: 199,
		description: 'Informative',
		image: 'https://cdn.auth0.com/blog/whatabyte/tea-sm.png',
	},
};

/**
 * Service Methods
 */

const findAll = async () => Object.values(items);

const find = async (id) => items[id];

const create = async (newItem) => {
	const id = new Date().valueOf();

	items[id] = {
		id,
		...newItem,
	};

	return items[id];
};

const update = async (
	id,
	itemUpdate
) => {
	const item = await find(id);

	if (!item) {
		return null;
	}

	items[id] = { id, ...itemUpdate };

	return items[id];
};

const remove = async (id) => {
 	const item = await find(id);

	if (!item) {
		return null;
	}

	delete items[id];
};

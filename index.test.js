const assert = require('assert');
const { forEach, map } = require('./index');

// don't need this with mocha
// const test = (desc, fn) => {
// 	console.log('----', desc);
// 	try {
// 		fn();
// 	} catch (err) {
// 		console.log(err.message);
// 	}
// };

it('The forEach function', () => {
	let sum = 0;
	forEach(
		[
			1,
			2,
			3
		],
		(value) => {
			sum += value;
		}
	);

	// Instead of making multiple if statements you can use assert.strictEqual (requirement)
	// can add another argument which is a custom message
	assert.strictEqual(sum, 6);
});

it('The map function', () => {
	const result = map(
		[
			1,
			2,
			3
		],
		(value) => {
			return value * 2;
		}
	);

	// deepStrictEqual will judge the inner items in an object/array
	assert.deepStrictEqual(result, [
		2,
		4,
		6
	]);
});

// npm install -g mocha

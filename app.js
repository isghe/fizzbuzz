const mod = (a, b) => a % b;

const boolToInteger = Number;

const fizzBuzz = number => [
	['FizzBuzz', 'Fizz'],
	['Buzz', number],
][boolToInteger(mod(number, 3) !== 0)][boolToInteger(mod(number, 5) !== 0)];

const main = () => {
	const result = [];
	for (let i = 0; i < 100; ++i) {
		const output = {index: i + 1, mod3: mod(i + 1, 3), mod5: mod(i + 1, 5), fizzBuzz35: fizzBuzz(i + 1)};
		result.push(output);
	}

	console.log(JSON.stringify(result));
};

main();

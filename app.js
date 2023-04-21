const fizzBuzz = number => [
	['FizzBuzz', 'Fizz'],
	['Buzz', number],
][Number(number % 3 !== 0)][Number(number % 5 !== 0)];

const main = () => {
	const result = Array.from({length: 100}).fill().map((value, i) => fizzBuzz(i + 1));
	console.log(JSON.stringify(result));
};

main();

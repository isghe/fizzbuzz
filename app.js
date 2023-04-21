const mod = (a, b) =>{
    return a%b;
};

const boolToInteger = (boolValue) =>{
    return +boolValue;
};

const fizzBuzz = (number) => {
    return [
        ['FizzBuzz', 'Fizz'],
        ['Buzz', number]
    ]
    [boolToInteger (0 !== mod (number, 3))]
    [boolToInteger (0 !== mod (number, 5))];
};

const main = () =>{
    let result = [];
    for (let i = 0; i < 100; ++i){
        const output = {index: i+1, mod3: mod (i+1, 3), mod5: mod (i+1, 5), fizzBuzz35: fizzBuzz (i+1)};
        result.push (output);
    }
    console.log (result);
};

main ();

function filter(array, callback) {
  let result = [];
  for (let idx = 0; idx < array.length; idx++) {
    if (callback(array[idx])) {
      result.push(array[idx]);
    }
  }
  return result;
}


// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]



function map(array, callback) {
  let result = [];
  for (let idx = 0; idx < array.length; idx++) {
    result.push(callback(array[idx]));
  }
  return result;
}

// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, value => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]



function reduce(array, callback, accumulator) {
  for (let idx = 0; idx < array.length; idx++) {
    accumulator = callback(accumulator, array[idx]);
  }
  return accumulator;
}

// another reduce method checks if accumulator is undefined (and will assign it to the first value);
// then the iteration starts at the second value;


let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]


function filterReduce(array, callback) {
  return array.reduce((accumulator, value) => {
    if (callback(value)) {
      accumulator.push(value);
    }
    return accumulator;
  }, []);
}


function mapReduce(array, callback) {
  return array.reduce((accumulator, value) => {
    accumulator.push(callback(value));

    return accumulator;
  });
}
// Question 1

// Explanation


// Question 2

// let foo = 1;

// function bar() {
//   if (foo === 1) {
//     foo = 2;                // you can change this line
//   } else if (foo === 2) {
//     let foo = 3;                // you can change this line
//   } else {
//     let foo = 4;                // you can change this line
//   }
// }

// bar();
// bar();
// bar();
// console.log(foo); // 1


// let foo = 1;

// function bar() {
//   if (foo === 1) {
//     foo = 2;                // you can change this line
//   } else if (foo === 2) {
//     foo = 3;                // you can change this line
//   } else {
//     let foo = 4;                // you can change this line
//   }
// }

// bar();
// bar();
// bar();
// console.log(foo); // 1


// let foo = 1;

// function bar() {
//   if (foo === 1) {
//     foo = 2;                // you can change this line
//   } else if (foo === 2) {
//     foo = 3;                // you can change this line
//   } else {
//     foo = 4;                // you can change this line
//   }
// }

// bar();
// bar();
// bar();
// console.log(foo); // 1


// Question 3


// "use strict";
// a = 5;
// console.log(a);


"use strict";


// Question 4

// function createNumberIncrementor() {
//   let initial = 0;
//   return function incrementNumber() {
//     initial += 1;
//     return initial;
//   }
// }

// let numberIncrementor = createNumberIncrementor();
// console.log(numberIncrementor()); // 1
// console.log(numberIncrementor()); // 2


// Question 5

// Explanation


// Question 6

let array;

function foo() {
  console.log(array);
}

function bar() {
  array = [1, 2, 3, 4, 5];
  foo();
}

bar();
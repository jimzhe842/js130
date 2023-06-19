function foo() {
  if (true) {
    let a = 1;
  }
  console.log(a);
}

let doo = function() {
  if (true) {
    var a = 1;
  }
  console.log(a);
}

let roo = function() {
  console.log(a);
  if (false) {
    var a = 1;
  }
  // console.log(a);
}

roo();

// doo();
// foo();



function foo(condition) {
  console.log(bar);
  console.log("xyzzy", xyzzy);
  qux = 0.5772;

  if (condition) {
    var qux = 3.1415;
    console.log(qux);
  } else {
    var bar = 24;

    var xyzzy = function() {
      var qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);




"use strict";

let deck;

SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
RANKS = ["2", "3", "4", "5", "6", "7", "8", "9",
         "10", "Jack", "Queen", "King", "Ace"];

function createDeck() {
  let allCards = () => {
    return SUITS.reduce((deck, suit) => {
      RANKS.forEach(rank => deck.push(`${rank} of ${suit}`));
      return deck;
    }, []);
  };

  deck = allCards();
  shuffle(deck);

  return deck;
}

function shuffle(deck) {
  for (counter = 0; counter < 256; counter += 1) {
    let randomIndex1 = randomCardIndex();
    let randomIndex2 = randomCardIndex();
    let tempCard = deck[randomIndex1];
    deck[randomIndex1] = deck[randomIndex2];
    deck[randomIndex2] = tempCard;
  }

  function randomCardIndex() {
    return Math.floor(Math.random() * deck.length);
  }
}

console.log(createDeck());


function makeMultipleLister(number) {
  let multiple = number;
  return function multipleLister() {
    while (multiple < 100) {
      console.log(multiple);
      multiple += number;
    }
  }
}

let lister = makeMultipleLister(17);
lister();


function addSubtract() {
  let number = 0;
  return {
    add: int => {
      number += int;
      console.log(number);
    },
    subtract: int => {
      number -= int;
      console.log(number);
    }
  }
}

let {add, subtract} = addSubtract();

add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10


function later(callback, arg) {
  return function() {
    return callback(arg);
  }
}


const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!

return function later2(callback, arg) {
  return secondArgument => callback(arg);
}



function bind(context, fn) {
  return () => fn.call(context);
}

let { foo, FirstError } = require("./foo");

for (let number = 0; number < 3; number += 1) {
  try {
    foo(number);
    console.log("No error detected");
  } catch (err) {
    if (err instanceof FirstError) {
      console.log("Ignoring FirstError");
    } else {
      throw err;
    }
  }
  
}

console.log("We shouldn't see this message.");  
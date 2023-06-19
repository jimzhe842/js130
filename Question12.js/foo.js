class FirstError extends Error {}
class SecondError extends Error {}

function foo(value) {
  switch (value) {
    case 1:
      throw new FirstError("This is the first error");
    case 2:
      throw new SecondError("This is the second error");
    default:
      console.log("Foo!");
      break;
  }
}

module.exports = {
  foo,
  FirstError,
  SecondError,
};
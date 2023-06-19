function newStack() {
  let stack = [];
  return {
    push(item) {
      stack.push(item);
    },

    pop() {
      stack.pop();
    },

    printStack() {
      stack.forEach(item => console.log(item));
    }
  }
}
function myBind(func, context) {
  let partialArgs = Array.from(arguments).slice(2);
  return function() {
    let remainingArgs = [].slice.call(arguments);
    let fullArgs = partialArgs.concat(remainingArgs);
    return func.apply(context, fullArgs);
  }
}
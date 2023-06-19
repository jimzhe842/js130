function myBind(func, context) {
  return (...args) => {
    return func.apply(context, args);
  }
}
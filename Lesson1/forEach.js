function forEach(array, callback, thisArg) {
  if (thisArg) {
    callback = callback.bind(thisArg);
  }
  for (let idx = 0; idx < array.length; idx++) {
    callback(array[idx], idx, array);
  }
}

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
[1, 2, 3].forEach(foo.showItem, foo);
[4, 5, 6].forEach(foo.showItem);
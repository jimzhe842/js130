function makeCounterLogger(start) {
  return function(end) {
    if (end > start) {
      for (let idx = start; idx <= end; idx++) {
        console.log(idx);
      }
    } else {
      for (let idx = start; idx >= end; idx--) {
        console.log(idx);
      }
    }
    
  }
}


// let countlog = makeCounterLogger(5);
// countlog(8);
// 5
// 6
// 7
// 8

// countlog(2);
// 5
// 4
// 3
// 2


// function makeList() {
//   let list = [];
//   return function(todo) {
//     if (todo) {
//       let index = list.indexOf(todo);
//       if (index > -1) {
//         list.splice(index, 1);
//         console.log(`${todo} removed!`);
//       } else {
//         list.push(todo);
//         console.log(`${todo} added!`);
//       }
//     } else {
//       if (list.length === 0) {
//         console.log("The list is empty.");
//       } else {
//         list.forEach(todo => console.log(todo));
//       }
//     }
//   }
// }

// let list = makeList();
// list();
// // The list is empty.

// list("make breakfast");
// // make breakfast added!

// list("read book");
// // read book added!

// list();
// // make breakfast
// // read book

// list("make breakfast");
// // make breakfast removed!

// list();
// // read book

// list("read book");
// list();


function makeList() {
  let list = [];
  return {
    add(item) {
      list.push(item);
      console.log(`${item} has been added!`); // Add in your checks
    },

    remove(item) {
      let index = list.indexOf(item);
      list.splice(index, 1);
      console.log(`${item} has been removed!`); // Add in your checks
    },

    list() {
      if (list.length === 0) {
        console.log("This list is empty.");
      } else {
        list.forEach(item => console.log(item));
      }
    }
  }
}


(function countdown(start) {
  if (start < 0) {
    return
  } else {
    console.log(start);
    return countdown(start - 1);
  }
})(7);



function foo(first, middle1, middle2, middle3, last) {
  return {
    first,
    last,
    middle: [middle1, middle2, middle3].sort();
  }
}

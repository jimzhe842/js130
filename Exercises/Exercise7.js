let ItemManager = {
  itemsLog: [],

  create: function(item, category, quantity) {
    if ((item.split(' ').join('').length < 5) ||
      (category.split(' ').length > 1) || (category.split(' ').join('').length < 5)) {
        return false;
      }
    let SKU = '';
    let wordsArr = item.split(' ');
    if (wordsArr.length > 1) {
      SKU += wordsArr[0].slice(0,2) + wordsArr[1].slice(0,1);
    } else {
      SKU += wordsArr[0].slice(0,3);
    }
    SKU += category.slice(0,2);
    SKU = SKU.toUpperCase();
    this.itemsLog.push({SKU, item, category, quantity});
  },

  update: function(SKU, updatedInfo) {
    let item = this.itemsLog.find(item => item.SKU === SKU);
    // let item = this.getItem(SKU);
    Object.keys(updatedInfo).forEach(key => {
      item[key] = updatedInfo[key];
    });
  },

  delete: function(SKU) {
    let index;
    for (let idx = 0; idx < this.itemsLog.length; idx++) {
      if (this.itemsLog[idx].SKU === SKU) {
        index = idx;
        return;
      }
    }
    this.itemsLog.splice(index, 1);
  },

  // items: function() {
  //   this.itemsLog.forEach(key => {
  //     console.log("skuCode: ", item.SKU);
  //     console.log("itemName: ", item.itemName);
  //     console.log("category: ", item.category);
  //     console.log("quantity: ", item.quantity);
  //   })
  // },

  inStock: function() {
    return this.itemsLog.filter(item => item.quantity > 0);
  },
  
  itemsInCategory: function(category) {
    return this.itemsLog.filter(item => item.category === category);
  },

  getItem: function(SKU) {
    return this.itemsLog.find(item => item.SKU === SKU);
  }
}

let ReportManager = {
  init: function(itemManager) {
    this.items = itemManager;
  },

  createReporter: function(SKU) {
    return (function() {
      let item = this.items.getItem(SKU); // no other properties or methods (that's the clue that you should use closures)
      return {
        itemInfo: function() {
          console.log("skuCode: ", item.SKU);
          console.log("itemName: ", item.itemName);
          console.log("category: ", item.category);
          console.log("quantity: ", item.quantity);
        }
      }
    }).bind(this)()
  },

  reportInStock: function() {
    return this.items.inStock().map(item => item.itemName).join(',');
  }
}
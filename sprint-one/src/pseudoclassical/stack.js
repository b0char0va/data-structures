var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
    this.someInstance = {};
    this.someInstance.storage = {};
};


Stack.prototype.push = function (value) {
    this.someInstance.storage[this.size() + 1] = value;
};

Stack.prototype.pop = function () {
    var toDelete = this.someInstance.storage[this.size()];
    delete this.someInstance.storage[this.size()];
    return toDelete;
};

Stack.prototype.size = function () {
    return Object.keys(this.someInstance.storage).length;
};


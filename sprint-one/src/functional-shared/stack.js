var Stack = function () {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    var someInstance = {};
    someInstance.storage = {};
    someInstance.push = stackMethods.push;
    someInstance.pop = stackMethods.pop;
    someInstance.size = stackMethods.size;
    return someInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
    this.storage[this.size() + 1] = value;
};

stackMethods.pop = function () {
    var toDelete = this.storage[this.size()];
    delete this.storage[this.size()];
    return toDelete;
};

stackMethods.size = function () {
    return Object.keys(this.storage).length;
};



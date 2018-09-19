var Queue = function () {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    var someInstance = {};
    someInstance.storage = {};
    someInstance.key = 0;
    someInstance.enqueue = queueMethods.enqueue;
    someInstance.dequeue = queueMethods.dequeue;
    someInstance.size = queueMethods.size;
    return someInstance;
};

var queueMethods = {};


queueMethods.enqueue = function (value) {
    this.storage[this.key + 1] = value;
    this.key++;
};

queueMethods.dequeue = function () {
    if (this.size === 0) {
        return 0;
    } else {
        for (var key in this.storage) {
            var toDelete = this.storage[key];
            delete this.storage[key];
            break;
        }
        return toDelete;
    }
};

queueMethods.size = function () {
    return Object.keys(this.storage).length;
};



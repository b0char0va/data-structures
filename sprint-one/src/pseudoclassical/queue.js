var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
    this.someInstance = {};
    this.someInstance.storage = {};
    this.someInstance.key = 0;
};

Queue.prototype.enqueue = function (value) {
    this.someInstance.storage[this.someInstance.key + 1] = value;
    this.someInstance.key++;
};

Queue.prototype.dequeue = function () {
    if (this.size === 0) {
        return 0;
    } else {
        for (var key in this.someInstance.storage) {
            var toDelete = this.someInstance.storage[key];
            delete this.someInstance.storage[key];
            break;
        }
        return toDelete;
    }
};

Queue.prototype.size = function () {
    return Object.keys(this.someInstance.storage).length;
};


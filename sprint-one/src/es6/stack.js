class Stack {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    constructor() {
        this.someInstance = {};
        this.someInstance.storage = {};
    }

    push(value) {
        this.someInstance.storage[this.size() + 1] = value;
    }

    pop() {
        var toDelete = this.someInstance.storage[this.size()];
        delete this.someInstance.storage[this.size()];
        return toDelete;
    }

    size() {
        return Object.keys(this.someInstance.storage).length;
    }

}
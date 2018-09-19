var Queue = function () {
    var someInstance = {};

    // Use an object with numeric keys to store values
    var storage = {};

    // Implement the methods below
    var key = 0;
    someInstance.enqueue = function (value) {
        storage[key + 1] = value;
        key++;
    };

    someInstance.dequeue = function () {
        if (someInstance.size === 0) {
            return 0;
        } else {
            for (var key in storage) {
                var toDelete = storage[key];
                delete storage[key];
                break;
            }
            return toDelete;
        }
    };

    someInstance.size = function () {
        return Object.keys(storage).length;
    };

    return someInstance;
};

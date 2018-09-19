var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
      storage[someInstance.size() + 1] = value;
  };

  someInstance.pop = function() {
      var toDelete = storage[someInstance.size()];
      delete storage[someInstance.size()];
      return toDelete;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

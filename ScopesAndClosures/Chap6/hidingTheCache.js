function hideTheCache() {
  var cache = {};

  return factorial;

  function factorial(x) {
    if (x < 2) {
      return 1;
    }
    if (!(x in cache)) {
      cache[x] = x * factorial(x - 1);
    }
    return cache[x];
  }
}

// Immediately Invoked Function Expression (IIFE)
var factorial = (function () {
  var cache = {};

  function factorial(x) {
    if (x < 2) return 1;
    if (!(x in cache)) {
      cache[x] = x * factorial(x - 1);
    }
    return cache[x];
  }

  return factorial;
})();

console.log(factorial(6));

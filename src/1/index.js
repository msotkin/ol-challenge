function arrayDimensionality(arr) {
  let maxDepth = 0;

  // first check to make sure input is valid
  if (!Array.isArray(arr)) return maxDepth;

  recursiveIterator(arr);
  return maxDepth
  
  /* This helper function is executed in a closure so
     maxDepth persists no matter how many times
     recursiveIterator is called */

  function recursiveIterator(arr, currentDepth = 1) {
    maxDepth = Math.max(currentDepth, maxDepth);
    arr.forEach(ele => {
      if (Array.isArray(ele)) {
        recursiveIterator(ele, currentDepth + 1);
      }
    });
  }
}

module.exports = arrayDimensionality;

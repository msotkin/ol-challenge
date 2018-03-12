# Question

The dimension of an array is defined as the number of indices needed to select an
element (e.g. [] has 1 dimension, [[1]] has 2 dimensions, [[2], [2, [3]]] has 3 dimensions).
The programming language you are using doesn’t implement this as part of its standard
library. Implement a method that determines the dimensionality of a given array. How
performant is this function?

# Implementation Notes

Because we have to check every element in every nested array, this solution has an exponential time complexity of O(k^n) where n is the dimensionality of the array. Because of this, the function is not especially performant. An array with a large dimensional depth would leave us especially vulnerable to a stack overflow error.
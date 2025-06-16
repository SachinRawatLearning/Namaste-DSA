//Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1.
const searchElement = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
  return -1;
};

//Write a function that returns the number of negative numbers in an array.
const countNegative = (arr) => {
  let negative = 0;
  for (let element of arr) if (element < 0) negative++;
  return negative;
};

//Write a function that returns the largest number in an array
const findLargest = (arr) => {
  let largest = -Infinity;
  for (let element of arr) if (largest < element) largest = element;
  return largest;
};

//Write a function that returns the minimum number in an array
const findMinimum = (arr) => {
  let minimum = Infinity;
  for (let element of arr) if (minimum > element) minimum = element;
  return minimum;
};

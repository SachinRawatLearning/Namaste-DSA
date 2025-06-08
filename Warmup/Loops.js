//Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1;
const searchElement = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
  return -1;
};

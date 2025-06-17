// Question: Find the Second Largest Number in an Array
// Write a function secondLargest(arr) that takes an array of numbers and returns the second largest unique number in the array.

// Requirements
// The array must contain at least two numbers.
// If the array contains all equal elements or only one unique element, return: "No second largest found"
// If the array has less than two elements, return: "Array should have at least two numbers"
// Constraints
// Time Complexity: O(n) (Single pass through the array)
// Space Complexity: O(1)
// Examples
// Input: [0, 3, 5, 2, 7, 9]
// Output: 7

// Input: [4, 4, 4, 4]
// Output: "No second largest found"

// Input: [5]
// Output: "Array should have at least two numbers"

// Input: [10, 20]
// Output: 10
// Approach
// Check array length. If fewer than 2 elements, return appropriate message.
// Initialize firstLargest and secondLargest to smallest possible values.
// Iterate through array and update values accordingly:
// If current number > firstLargest: update secondLargest then firstLargest.
// Else if current number > secondLargest and != firstLargest: update secondLargest.
// After loop, check if secondLargest was updated. If not, return message.
// Time & Space Complexity
// Time Complexity: O(n) – Single pass through the array.
// Space Complexity: O(1) – Constant space used for two variables.

//Find the second largest number in an array.
const secondLargest = (arr) => {
  if (arr.length < 2) return null;

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      secondLargest = largest;
      largest = arr[i];
    } else if (secondLargest < arr[i] && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

const arr = [4, 9, 0, 2, 8, 7, 1];
console.log(secondLargest(arr));

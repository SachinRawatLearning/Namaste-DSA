// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

// The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

// Example 1:

// Input: nums = [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2;
// The number 2 can't find next greater number.
// The second 1's next greater number needs to search circularly, which is also 2.
// Example 2:

// Input: nums = [1,2,3,4,3]
// Output: [2,3,4,-1,4]

// Constraints:

// 1 <= nums.length <= 104
// -109 <= nums[i] <= 109
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const stack = [];
  nums.push(...nums);
  const n = nums.length;
  stack.push(nums[n - 1]);
  const answer = new Array(n).fill(-1);
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < stack[stack.length - 1]) {
      answer[i] = stack[stack.length - 1];
      stack.push(nums[i]);
    } else {
      while (stack.length) {
        let top = stack[stack.length - 1];
        if (top > nums[i]) {
          answer[i] = top;
          stack.push(nums[i]);
          break;
        } else stack.pop();
      }
      if (!stack.length) {
        stack.push(nums[i]);
      }
    }
  }
  return answer.slice(0, n / 2);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const stack = [];
  const n = nums.length;
  stack.push(nums[n - 1]);
  const answer = new Array(n).fill(-1);

  for (let i = 2 * n - 2; i >= 0; i--) {
    if (nums[i % n] < stack[stack.length - 1]) {
      answer[i % n] = stack[stack.length - 1];
      stack.push(nums[i % n]);
    } else {
      while (stack.length) {
        let top = stack[stack.length - 1];
        if (top > nums[i % n]) {
          answer[i % n] = top;
          stack.push(nums[i % n]);
          break;
        } else stack.pop();
      }
      if (!stack.length) {
        stack.push(nums[i % n]);
      }
    }
  }
  return answer.slice(0, n);
};
//Time,Space -> O(n)

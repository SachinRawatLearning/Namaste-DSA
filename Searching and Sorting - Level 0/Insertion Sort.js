/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let currentVal = nums[i];
    let j;
    for (j = i - 1; j >= 0 && currentVal < nums[j]; j--) {
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = currentVal;
  }
  return nums;
};

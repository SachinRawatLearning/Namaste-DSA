/**
 * @param {number[]} nums
 * @return {number[]}
 */
const merge = (arr1, arr2) => {
  let left = 0;
  let right = 0;
  const sortedArray = [];
  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      sortedArray.push(arr1[left]);
      left++;
    } else {
      sortedArray.push(arr2[right]);
      right++;
    }
  }
  return [...sortedArray, ...arr1.slice(left), ...arr2.slice(right)];
};

var sortArray = function (nums) {
  if (nums.length <= 1) return nums;

  const middle = Math.floor(nums.length / 2);
  const left = sortArray(nums.slice(0, middle));
  const right = sortArray(nums.slice(middle));
  return merge(left, right);
};

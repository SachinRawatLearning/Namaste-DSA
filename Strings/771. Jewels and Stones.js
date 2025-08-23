// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const hash = {};

  for (let i = 0; i < stones.length; i++)
    hash[stones[i]] = (hash[stones[i]] || 0) + 1;

  let count = 0;
  for (let i = 0; i < jewels.length; i++) count += hash[jewels[i]] || 0;

  return count;
};
//Time-> O(n), Space-> O(1)

var numJewelsInStones = function (jewels, stones) {
  const set = new Set();

  for (let i = 0; i < jewels.length; i++) {
    set.add(jewels[i]);
  }

  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    if (set.has(stones[i])) count++;
  }

  return count;
};

//Time-> O(n), Space-> O(1)

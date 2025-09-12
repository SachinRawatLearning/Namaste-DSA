// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};
  for (let i = 0; i < strs.length; i++) {
    let sortedStr = strs[i].split("").sort().join("");
    if (map[sortedStr]) {
      map[sortedStr].push(strs[i]);
    } else {
      map[sortedStr] = [strs[i]];
    }
  }
  return Object.values(map);
};
//Time-> O(n*mlogn)
//Space->O(n*m)

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hashMap = {};
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i];
    let arr = new Array(26).fill(0);
    for (let j = 0; j < str.length; j++) {
      arr[str.charCodeAt(j) - 97]++;
    }
    let res = arr.join("#");
    if (hashMap[res]) {
      hashMap[res].push(str);
    } else {
      hashMap[res] = [str];
    }
  }
  return Object.values(hashMap);
};
//Time-> O(n*m)
//Space->O(n*m)

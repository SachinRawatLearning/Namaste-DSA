// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const hashMapS = new Map();
  const hashMapT = new Map();

  for (let i = 0; i < s.length; i++) {
    hashMapS.set(s[i], (hashMapS.get(s[i]) || 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    hashMapT.set(t[i], (hashMapT.get(t[i]) || 0) + 1);
  }

  for (let [key, value] of hashMapS.entries()) {
    if (value !== hashMapT.get(key)) return false;
  }
  return true;
};
//Time->O(n)
//Space->O(1)//Max length of Map -> 26 characters

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

//Time->O(nlogn)
//Space->O(n)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const hashMap = new Map();

  for (let i = 0; i < s.length; i++) {
    hashMap.set(s[i], (hashMap.get(s[i]) || 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    if (!hashMap.get(t[i]) || hashMap.get(t[i]) < 0) return false;
    hashMap.set(t[i], hashMap.get(t[i]) - 1);
  }

  return true;
};

//Time->O(n)
//Space->O(1)//Max length of Map -> 26 characters

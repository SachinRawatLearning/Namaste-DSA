// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"

// Output: true

// Explanation:

// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.
// Example 2:

// Input: s = "foo", t = "bar"

// Output: false

// Explanation:

// The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

// Example 3:

// Input: s = "paper", t = "title"

// Output: true

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const hashMap = new Map();
  let res = "";

  for (let i = 0; i < s.length; i++) {
    if (!hashMap.get(s[i])) {
      if ([...hashMap.values()].includes(t[i])) return false;
      hashMap.set(s[i], t[i]);
    }
    res += hashMap.get(s[i]);
  }

  return res === t;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const mapStoT = new Map();
  const mapTtoS = new Map();

  for (let i = 0; i < s.length; i++) {
    if (mapStoT.get(s[i]) && mapStoT.get(s[i]) !== t[i]) return false;
    if (mapTtoS.get(t[i]) && mapTtoS.get(t[i]) !== s[i]) return false;

    mapStoT.set(s[i], t[i]);
    mapTtoS.set(t[i], s[i]);
  }

  return true;
};

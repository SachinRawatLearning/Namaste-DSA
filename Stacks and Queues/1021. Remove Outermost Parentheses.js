// A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

// Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

// Example 1:

// Input: s = "(()())(())"
// Output: "()()()"
// Explanation:
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
// Example 2:

// Input: s = "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation:
// The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
// Example 3:

// Input: s = "()()"
// Output: ""
// Explanation:
// The input string is "()()", with primitive decomposition "()" + "()".
// After removing outer parentheses of each part, this is "" + "" = "".

// Constraints:

// 1 <= s.length <= 105
// s[i] is either '(' or ')'.
// s is a valid parentheses string.
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  const stack = [];
  let res = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      if (stack.length > 1) res += "(";
    } else {
      if (stack.length > 1) res += ")";
      stack.pop();
    }
  }

  return res;
};
//Time,Space-> O(n)

//Without Stack:

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let depth = 0;
  let res = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (depth > 0) res += "(";
      depth++;
    } else {
      depth--;
      if (depth > 0) res += ")";
    }
  }

  return res;
};
//Time-> O(n)
//Space-> O(1) (Strings are immutable in js)

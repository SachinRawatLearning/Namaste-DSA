// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Example 1:

// Input: head = [1,2,2,1]
// Output: true
// Example 2:

// Input: head = [1,2]
// Output: false

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

// Follow up: Could you do it in O(n) time and O(1) space?
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const arr = [];
  let curr = head;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - i - 1]) return false;
  }
  return true;
};
//Space->O(n)
var isPalindrome = function (head) {
  if (!head.next) return true;
  //Find Middle
  let slow = fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //Reverse list from middle
  let middle = slow;
  let prev = null;
  while (middle) {
    let temp = middle.next;
    middle.next = prev;
    prev = middle;
    middle = temp;
  }

  //Compare startList and endList
  let start = head;
  let end = prev;
  while (end) {
    if (start.val !== end.val) return false;
    start = start.next;
    end = end.next;
  }
  return true;
};
//Space->O(n)

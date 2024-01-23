/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order,
 * and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Example 1:
 * 
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * 
 * Explanation: 342 + 465 = 807.
 * 
 * Example 2:
 * 
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 * 
 * Example 3:
 * 
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 * 
 * Constraints:
 * 
 *    The number of nodes in each linked list is in the range [1, 100].
 *   0 <= Node.val <= 9
 *  It is guaranteed that the list represents a number that does not have leading zeros.
 * 
 * Solution:
 * 
 * We traverse two linked lists at the same time, and use the variable carry to indicate whether there is a carry.
 * 
 * Each time we traverse, we take out the current bit of the corresponding linked list, calculate the sum with the carry 'carry',
 * and then update the carry. Then we update the current bit to the answer linked list. If both linked lists are traversed, and 
 * the carry is 0, the traversal ends. 
 * 
 * Finally, we return the head node of the answer linked list.
 * 
 * Complexity:
 * 
 * Time complexity: O(max(m,n)), where m and n are the lengths of l1 and l2 respectively. We need to traverse the entire position * of the two linked lists, and each position only needs O(1) time to calculate the sum.
 * Ignoring the space consumption of the answer, the space complexity is O(1).
 */

/**
 * Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
 */

/**
 * Definition for doubly-linked list.
 * function ListNode(val, next, prev) {
 *    this.val = (val===undefined ? 0 : val)
 *    this.next = (next===undefined ? null : next)
 *    this.prev = (prev===undefined ? null : prev)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

var addTwoNumbers = function (l1, l2) {



    const dummy = new ListNode();
    let carry = 0;
    let cur = dummy;
    while (l1 || l2 || carry) {
        const s = (l1?.val || 0) + (l2?.val || 0) + carry;
        carry = Math.floor(s / 10);
        cur.next = new ListNode(s % 10);
        cur = cur.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    return dummy.next;
};

// console.log(addTwoNumbers([2,4,3], [5,6,4]));
// console.log(addTwoNumbers([0], [0]));
// console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));

     

/* class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {

    const arrayToLinkedList = (arr) => {
        let dummy = new ListNode()
        let cur = dummy.next
        for (let val of arr) {
            cur.next = new ListNode(val)
            cur = cur.next
        }
        return dummy.next
    }

    l1 = arrayToLinkedList(l1)
    l2 = arrayToLinkedList(l2)

    const dummy = new ListNode();
    let current = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        // Extract digits from the current nodes if available
        const x = l1 ? l1.value : 0;
        const y = l2 ? l2.value : 0;

        // Calculate the sum of the current digits and the carry
        const total = x + y + carry;
        carry = Math.floor(total / 10);
        const digit = total % 10;

        // Create a new node with the digit and move to the next node
        current.next = new ListNode(digit);
        current = current.next;

        // Move to the next nodes in l1 and l2 if available
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
} */

// Example usage with the given linked lists
const l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

const result = addTwoNumbers(l1, l2);
console.log(result);

/* // Print the result
let current = result;
while (current) {
    console.log(current.value);
    current = current.next;
} */
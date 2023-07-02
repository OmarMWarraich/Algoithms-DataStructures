/**
 * 
 * Given a potentially cyclical linked list where
 * each value is unique, return the node at which
 * the cycle starts. If the list does not contain
 * a cycle, return null.
 * 
 * Ex: Given the following linked lists...
 * 
 * 1->2->3, return null
 * 1->2->3->4->5->2 (5 points back to 2), return a reference to the node containing 2
 * 1->9->3->7->7 (7 points to itself), return a reference to the node containing 7
 * 
 */

// Time: O(n) | Space: O(1)

// Definition for singly-linked list.

function ListNode(val) {
    this.val = val;
    this.next = null;
    }

function detectCycle(head) {
    if (head === null) return null;
    let slow = head;
    let fast = head;
    let cycleLength = 0;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            cycleLength = calculateCycleLength(slow);
            break;
        }
    }
    return findStart(head, cycleLength);
}

function calculateCycleLength(slow) {
    let current = slow;
    let cycleLength = 0;
    while (true) {
        current = current.next;
        cycleLength += 1;
        if (current === slow) break;
    }
    return cycleLength;
}

function findStart(head, cycleLength) {
    let pointer1 = head;
    let pointer2 = head;
    while (cycleLength > 0) {
        pointer2 = pointer2.next;
        cycleLength -= 1;
    }
    while (pointer1 !== pointer2) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }
    return pointer1;
}

// Tests

const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
console.log(detectCycle(head1)); // null

const head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(4);
head2.next.next.next.next = new ListNode(5);
head2.next.next.next.next.next = head2.next;
console.log(detectCycle(head2)); // 2

const head3 = new ListNode(1);
head3.next = new ListNode(9);
head3.next.next = new ListNode(3);
head3.next.next.next = new ListNode(7);
head3.next.next.next.next = head3.next.next.next;
console.log(detectCycle(head3)); // 7

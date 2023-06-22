/**
 * 
 * Given a non empty linked list, return the 
 * middle node of the list. If the linked list
 * contains an even number of elements, return
 * the node closer to the end.
 * 
 * Ex: given the following linked lists...
 * 
 * 1->2->3->null, return 2
 * 1->2->3->4->null, return 3
 * 1->null, return 1
 * 
 */

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function findMiddle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.data;
}

console.log(findMiddle(new Node(1, new Node(2, new Node(3)))));
console.log(findMiddle(new Node(1, new Node(2, new Node(3, new Node(4))))));
console.log(findMiddle(new Node(1)));
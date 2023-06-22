/**
 * 
 * Given a linked list and a value, 
 * remove all nodes containing the 
 * provided value, and return the resulting list.
 * 
 * Ex: given the following linked lists...
 * 
 * 1->2->3->null, value = 3, return 1->2->null
 * 8->1->1->4->12->null, value = 1, return 8->4->12->null
 * 7->12->2->9->null, value = 7, return 12->2->9->null
 * 
 */


class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function removeValue(head, value) {
    let current = head;
    let previous = null;

    while (current !== null) {
        if (current.data === value) {
            if (previous === null) {
                head = head.next;
            } else {
                previous.next = current.next;
            }
        } else {
            previous = current;
        }
        current = current.next;
    }
    return head;
}

console.log(removeValue(new Node(1, new Node(2, new Node(3)))), 3);
console.log(removeValue(new Node(8, new Node(1, new Node(1, new Node(4, new Node(12)))))), 1);
console.log(removeValue(new Node(7, new Node(12, new Node(2, new Node(9))))), 7);

 /**
  * 
  * Given two sorted linked lists, merge them together in ascending order
  * and return a reference to the merged list
  * 
  * Ex: given the following lists...
  * 
  * list1 = 1->2->3, list2 = 4->5->6->null
  * return 1->2->3->4->5->6->null
  * 
  * list1 = 1->3->5, list2 = 2->4->6->null
  * return 1->2->3->4->5->6->null
  * 
  * list1 = 4->4->7, list2 = 1->5->6->null
  * return 1->4->4->5->6->7->null
  * 
  */

 class Node {
     constructor(data, next = null) {
         this.data = data;
         this.next = next;
     }
 }

    function mergeLinkedLists(list1, list2) {
        let head = new Node();
        let current = head;

        while (list1 !== null && list2 !== null) {
            if (list1.data < list2.data) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }

        if (list1 !== null) {
            current.next = list1;
        } else {
            current.next = list2;
        }

        return head.next;
    }
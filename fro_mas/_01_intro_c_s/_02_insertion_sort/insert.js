/**
 * 
 * Insertion Sort!
 * 
 * Assumption:-
 * Beginning of list is sorted while remainder is an unsorted mess.
 * Outer Loop iterates over whole list with its index specifying the
 * sorted part of the list. Inner loop iterates over the sorted part
 * and inserts the current element into the correct position.
 *  
 * Ex:
 * 
 * [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]
 * 
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * 
 */

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
    }
    arr[j + 1] = current;
    }
    return arr;
}

console.log(insertionSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));
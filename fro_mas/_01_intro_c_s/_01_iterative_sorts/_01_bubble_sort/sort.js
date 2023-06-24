/**
 * 
 * BubbleSort
 * 
 * Given an array, sort the array using bubble sort algorithm.
 * 
 * Ex: 
 * [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * 
 */

function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        } 
    } while (swapped);
    return arr;
}

console.log(bubbleSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));

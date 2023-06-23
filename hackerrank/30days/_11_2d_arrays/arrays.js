/**
 * 
 * Given a 6 x 6 2D Array, A:
 * 
 * 1 1 1 0 0 0
 * 0 1 0 0 0 0
 * 1 1 1 0 0 0
 * 0 0 0 0 0 0
 * 0 0 0 0 0 0
 * 0 0 0 0 0 0
 * 
 * An hourglass in A is a subset of values
 * with indices falling in this pattern in A's
 * graphical representation:
 * 
 * a b c
 *   d
 * e f g
 * 
 * There are 16 hourglasses in A, and an
 * hourglass sum is the sum of an hourglass
 * 
 * The task is to print the largest hourglass sum
 * 
 ** 
 */


 // Solution

function hourglassSum(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr.length - 2; j++) {
            let sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] 
            + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] 
            + arr[i+2][j+2];
            if (sum > max) {
                max = sum;
            }
        }
    }
    return max;
}

let arr = [
    [1, 1, 1, 0, 0, 0],
    [0 ,1 ,0 ,0 ,0 ,0],
    [1 ,1 ,1 ,0 ,0 ,0],
    [0 ,0 ,2 ,4 ,4 ,0],
    [0 ,0 ,0 ,2 ,0 ,0],
    [0 ,0 ,1 ,2 ,4 ,0]
];

console.log(hourglassSum(arr)); // 19


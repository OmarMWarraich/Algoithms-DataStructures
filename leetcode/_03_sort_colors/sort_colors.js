/**
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color 
 * are adjacent, with the colors in the order red, white, and blue.
 * We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
 * You must solve this problem without using the library's sort function.
 * 
 * Hint:
 * A rather straight forward solution is a two-pass algorithm using counting sort.
 * Iterate the array counting number of 0's, 1's, and 2's.
 * Overwrite array with the total number of 0's, then 1's and followed by 2's.
 * 
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let red = 0;
    let white = 0;
    let blue = 0;
    for (let num of nums){
        if (num === 0){
            red++
        }
        if (num === 1){
            white++
        }
        if (num === 2){
            blue++
        }
    }
    let index = 0;
    while(red>0){
        nums[index++] = 0
        red--
    }
    while(white>0){
        nums[index++] = 1
        white--
    }
    while(blue>0){
        nums[index++] = 2
        blue--
    }
    return nums
};

console.log(sortColors([2,0,2,1,1,0])) // [0,0,1,1,2,2]
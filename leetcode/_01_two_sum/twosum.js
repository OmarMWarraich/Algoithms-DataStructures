/**
 * 
 * Given an array of integers nums and integer target,
 * return indices of the two numbers such that they 
 * add up to target.
 * 
 * Assumption:- Each inpput would have exactly one solution.
 * Same element can not be used twice.
 * 
 * Answer can be in any order.
 * 
 * Ex:- 
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * 
 */

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
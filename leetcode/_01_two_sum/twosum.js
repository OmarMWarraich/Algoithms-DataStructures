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

// Time complexity: O(n2)
// var twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// }


// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity? 

/**
 * Hash Table
 * We can use the hash table m to store the array value and the corresponding
 * subscript.
 * Traverse the array nums, when you find target - nums[i] in the hash table,
 * it means that the target value is found, and the subscript is i and m[target - nums[i]]. 
 * The time complexity is O(n) and the space complexity is O(n), where n is 
 * the length of the array nums.
 */

var twoSum = function(nums, target) {
    const m = {};
    for(let i = 0; i < nums.length; i++) {
        if(m[target - nums[i]] !== undefined) {
            return [m[target - nums[i]], i];
        }
        m[nums[i]] = i;
    }
}
    
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,3], 6));
console.log(twoSum([3,2,4], 6));
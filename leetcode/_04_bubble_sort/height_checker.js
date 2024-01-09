/**
 * A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in 
 * non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the 
 * expected height of the ith student in line.
 * 
 * You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the 
 * height of the ith student in line (0-indexed).
 * 
 * Return the number of indices where heights[i] != expected[i].
 * 
 * Example:
 * Input: heights = [1,1,4,2,1,3]
 * Output: 3
 * 
 * Explanation: 
 * heights:  [1,1,4,2,1,3]
 * expected: [1,1,1,2,3,4]
 * Indices 2, 4, and 5 do not match.
 */

var heightChecker = function(heights) {
    const expected = [...heights]; 

    // Use counting sort to determine the expected heights
    const count = Array(101).fill(0); // Assuming heights are between 1 and 100
    for (const height of expected) {
        count[height]++;
    }

    // Update expected array with sorted heights
    let index = 0;
    for (let i = 1; i < count.length; i++) {
        while (count[i] > 0) {
            expected[index++] = i;
            count[i]--;
        }
    }

    let mismatchCount = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) {
            mismatchCount++;
        }
    }

    return mismatchCount;
};

// Example usage:
const heights1 = [1, 1, 4, 2, 1, 3];
console.log(heightChecker(heights1)); 
const heights2 = [1, 2, 3, 4, 5];
console.log(heightChecker(heights2));

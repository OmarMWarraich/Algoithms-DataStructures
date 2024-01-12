/**
 * 4. Median of Two Sorted Arrays
 * 
 * Description
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 * Example 1:
 * 
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * 
 * Explanation: merged array = [1,2,3] and median is 2.
 * 
 * Example 2:
 * 
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * 
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 */

/**
 * Solution: Divide and Conquer
 * 
 * Intuition
 * 
 * The key point of this problem is to ignore half part of A and B each step recursively by comparing the median of remaining A and B:
 * 
 * if (aMid < bMid) Keep [aRight + bLeft]
 * 
 * else Keep [bRight + aLeft]
 * 
 * As the following: time=O(log(m + n))
 * 
 * 
 */

var findMedianSortedArrays = function (nums1, nums2) {
    // Get the length of the two arrays
    const m = nums1.length;
    const n = nums2.length;

    // Define a function to find the kth element in the merged sorted array
    const f = (i, j, k) => {
        // Base cases
        if (i >= m) return nums2[j + k - 1];
        if (j >= n) return nums1[i + k - 1];
        if (k == 1) return Math.min(nums1[i], nums2[j]);

        // Divide k into two parts
        const p = Math.floor(k / 2);

        // Get elements x and y from the two arrays
        const x = i + p - 1 < m ? nums1[i + p - 1] : 1 << 30;
        const y = j + p - 1 < n ? nums2[j + p - 1] : 1 << 30;

        return x < y ? f(i + p, j, k - p) : f(i, j + p, k - p);
    }

    // Get the median of the merged sorted array
    const a = f(0, 0, Math.floor((m + n + 1) / 2));
    const b = f(0, 0, Math.floor((m + n + 2) / 2));

    return (a + b) / 2;
}

// Test cases

console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(findMedianSortedArrays([1, 3], [2, 7])); // 2.5

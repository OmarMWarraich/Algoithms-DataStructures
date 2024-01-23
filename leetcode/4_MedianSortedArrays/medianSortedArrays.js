// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall time complexity should be O(log(m+n))

// The problem requires the time complexity of O(log(m+n)), therefore we cannot directly traverse the two arrays and should rather employ the binary search methodology.

// Solution: Divide and Conquer

// If m+n is odd then the median is [(m+n+1)/2]th number whereas if m+n is even then the median is the average of [(m+n+1)/2]th number and [(m+n+2)/2]. Infact we can unify it as the average of [(m+n+1)/2]th number and [(m+n+2)/2].

// We can design a function f(i,i,k) which represents the kth smallest number in the interval [i,m) of array nums1 and the interval [j,n) of array nums2. The median is the average of f(0,0,[(m+n+1)/2]) and f(0,0,[(m+n+2)/2]).

// The implementation concept behind the function f(i,j,k) is as follows:-

/** 
* If i >= m, it means that the interval [i,m) is empty so directly returns nums2[j+k-1]
* If j >= n, it means that the interval [j,n) is empty so directly returns nums1[i+k-1]
* If k=1, it means to find the first number, so just return the minimum of nums1 and nums2.
*Otherwise we find the [k/2]th number in the two arrays denoted as x and y.(Note: If a certain array does not have the [k/2]th number, then we regard the [k/2]th number as positive infinity). Let us compare the size of x and y.

** if x <= y, it means that [k/2]th number of array nums1 cannot be the kth smallest number so we can exclude the interval [i,i+k/2] of array nums1 and recursively call f(i+[k/2], j, k-[k/2])
** if x > y, it means that [k/2]th number of array nums2 cannot be the kth smallest number so we can exclude the interval [j,j+k/2] of array nums2 and recursively call f(i, j+[k/2], k-[k/2])

The time complexity and space complexity is O(log(m+n)) where m and n are the length of arrays nums1 and nums2 respectively.
*/

var findMedianSortedArrays = function (nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;

    const f = (i, j, k) => {
        if (i >= m) return nums2[j + k - 1];
        if (j >= n) return nums1[i + k - 1];
        if (k == 1) return Math.min(nums1[i], nums2[j]);

        const p = Math.floor(k / 2);

        const x = i + p - 1 < m ? nums1[i + p - 1] : 1 << 30;
        const y = j + p - 1 < m ? nums2[j + p - 1] : 1 << 30;
        return x < y ? f(i + p, j, k - p) : f(i, j + p, k - p);
    };
    const a = f(0, 0, Math.floor((m + n + 1) / 2));
    const b = f(0, 0, Math.floor((m + n + 2) / 2));
    return (a + b) / 2;
};

console.log(findMedianSortedArrays([1, 2], [4, 5]));

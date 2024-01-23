// Given a string s, return the longest palindrome substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"

// Note: "aba" is also a valid answer.

// Example 2:

// Input: s = "cbbd"
// Output: "bb"

/**
 * Solution: Dynamic Programming
 * We define f[i][j] to represent whether the string s[i...j] is a palindrome. Initially we set f[i][i] = true.
 *Next we define variables k and mx, where k represents the starting position of the longest palindrome and mx represents the length of the longest palindrome. Initially k = 0 and mx = 1.
 *Considering f[i][j], if s[i] == s[j], then f[i][j]=f[i+1][j-1], otherwise f[i][j]=false. If f[i][j]=true and mx < j-i+1, then we update k = i and mx = j-i+1
 *Since f[i][j] depends on f[i+1][j-1], we need to ensure that i is enumerated from larger to smaller and j is enumerated from smaller to larger.
 *The time complexity of is O(n2) and so is the space complexity where n is the length of string s.
 */

 var longestPalindrome = function (s) {
    const n = s.length;
    const f = Array(n)
      .fill(0)
      .map(() => Array(n).fill(true));
    let k = 0;
    let mx = 1;
    for (let i = n - 2; i >= 0; --i) {
      for (let j = i + 1; j < n; ++j) {
        f[i][j] = false;
        if (s[i] === s[j]) {
          f[i][j] = f[i + 1][j - 1];
          if (f[i][j] && mx < j - i + 1) {
            mx = j - i + 1;
            k = i;
          }
        }
      }
    }
    return s.slice(k, k + mx);
  };
  
  console.log(longestPalindrome("babad"));
  
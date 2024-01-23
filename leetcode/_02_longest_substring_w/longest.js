/**
 * 
 * Given a string s, find the length of the 
 * longest substring without repeating characters.
 * 
 * Ex.,
 * 
 * s = "abcabcbb"
 * 3
 * 
 * s = "bbbbb"
 * 1
 * 
 * s = "pwwkew"
 * 3
 * 
 */

/* var lengthOfLongestSubstring = function(s) {
    // Initialize variables
    var longest = 0; // Length of the longest substring without repeating characters
    var start = 0;   // Start index of the current substring
    var end = 0;     // End index of the current substring
    var map = {};    // A map to store the index of each character in the string
    
    // Loop through the string
    while (end < s.length) {
        var char = s[end];
        
        // If the current character is already in the substring,
        // update the start index to the next position after the last occurrence of the character
        if (map[char]) {
            start = Math.max(start, map[char]);
        }
        
        // Update the index of the current character in the map
        map[char] = end + 1;
        
        // Update the length of the longest substring if needed
        longest = Math.max(longest, end - start + 1);
        
        // Move to the next character in the string
        end++;
    }
    
    // Return the length of the longest substring without repeating characters
    return longest;
} */

// Solution: Two pointers and hash table

/** 
Define a hash table to record the characters in the current window. Let i and j represent the starting and ending index of the non repeating substring respectively. The length of the non repeating substring is recorded by ans.

For each character s[j] in the string, we call it c. if c exists in the window s[i..j-1], we move it to the right until s[i..j] does not contain c. Then we add c to the hash table. At this time the window s[i..j] does not contain any repeated element and we update the maximum value of c. Finally we return ans.
The time complexity is O(n) where n is the length of string.
*/

var lengthOfLongestSubstring = function (s) {
    // Initialize a set to keep track of unique characters in the current substring
    const ss = new Set();

    // Initialize pointers and the variable to store the length of the longest substring
    let i = 0;    // Start index of the current substring
    let ans = 0;  // Length of the longest substring

    // Iterate through the string using the end pointer (j)
    for (let j = 0; j < s.length; ++j) {
        // If the current character is already in the set (indicating a repeating character),
        // remove characters from the set and adjust the start pointer (i) until there are no repeats
        while (ss.has(s[j])) {
            ss.delete(s[i++]);
        }

        // Add the current character to the set
        ss.add(s[j]);

        // Update the length of the longest substring if needed
        ans = Math.max(ans, j - i + 1);
    }

    // Return the length of the longest substring without repeating characters
    return ans;
};



console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
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

var lengthOfLongestSubstring = function(s) {
    var longest = 0;
    var start = 0;
    var end = 0;
    var map = {}; // char: index
    
    while (end < s.length) {
        var char = s[end];
        if (map[char]) {
            start = Math.max(start, map[char]);
        }
        map[char] = end + 1;
        longest = Math.max(longest, end - start + 1);
        end++;
    }
    
    return longest;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
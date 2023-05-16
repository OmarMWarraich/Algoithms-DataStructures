/**
*  Given a string and the ability to delete at most one 
*  character, return whether or not it can form a palindrome.
*  Note: a palindrome is a sequence of characters that 
*  reads the same forwards and backwards.
*  Ex: Given the following strings...
* 
*  "abcba", return true
*  "foobof", return true (remove the first 'o', the second 'o', or 'b')
*  "abccab", return false 
*/

function validPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return isPalindrome(str, left + 1, right) || isPalindrome(str, left, right - 1);
        }
        left++;
        right--;
    }
    return true;
}

function isPalindrome(str, left, right) {
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}


console.log(validPalindrome("abcba")); // true
console.log(validPalindrome("foobof")); // true
console.log(validPalindrome("abccab")); // false
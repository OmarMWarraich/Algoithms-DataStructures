/** 
*  Given an array of strings, return the longest common prefix 
*  that is shared amongst all strings.
*  Note: you may assume all strings only contain lowercase 
*  alphabetical characters.
*  
*  Ex: Given the following arrays...
*  
*  ["colorado", "color", "cold"], return "col"
*  ["a", "b", "c"], return ""
*  ["spot", "spotty", "spotted"], return "spot" 
*/

function longestCommonPrefix(arr) {
    if (arr.length === 0) return "";
    let prefix = arr[0];
    for (let i = 1; i < arr.length; i++) {
        while (arr[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix.length === 0) return "";
        }
    }
    return prefix;
}

console.log(longestCommonPrefix(["colorado", "color", "cold"])); // "col"
console.log(longestCommonPrefix(["a", "b", "c"])); // ""
console.log(longestCommonPrefix(["spot", "spotty", "spotted"])); // "spot"
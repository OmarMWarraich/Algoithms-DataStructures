/**
 * 
 * Given a string, return the index of
 * its first unique character. If a unique
 * character does not exist, return -1.
 * 
 */

/**
 * 
 * Ex: Given the following strings...
 * 
 * "abcabd", return 2
 * "thedailybyte", return 1
 * "developer", return 0
 * 
 */

// Time: O(n)

function unique(str) {
    let map = {};
    for (let i = 0; i < str.length; i++) {
        if (map[str[i]] === undefined) {
            map[str[i]] = 1;
        } else {
            map[str[i]]++;
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (map[str[i]] === 1) {
            return i;
        }
    }
    return -1;
}

console.log(unique("abcabd"))
console.log(unique("thedailybyte"))
console.log(unique("developer"))
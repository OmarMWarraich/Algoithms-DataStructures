/**
 * 
 * Given two strings s and t return
 * whether or not s is an anagram of t.
 * 
 * Note: An anagram is a word formed by
 * reordering the letters of another word.
 * 
 * Ex: Given the following strings...
 * 
 * s = "cat", t = "tac", return true
 * s = "listen", t = "silent", return true
 * s = "program", t = "function", return false
 * 
 */

const validAnagram = (s, t) => {
    // sort the strings
    let sSorted = s.split('').sort().join('')
    let tSorted = t.split('').sort().join('')
    // compare the strings
    console.log(sSorted, tSorted)
    return sSorted === tSorted
}
console.log(validAnagram('cat', 'tac'))
console.log(validAnagram('listen', 'silent'))
console.log(validAnagram('program', 'function'))

/**
*    Given a string, return whether or not it uses capitalization correctly. A string correctly uses capitalization if all letters are capitalized, no letters are capitalized, or only the first letter is capitalized.
*    
*    Ex: Given the following strings...
*    
*    "USA", return true
*    "Calvin", return true
*    "compUter", return false
*    "coding", return true 
*/

function capitalization(str) {
    // Your code here
    let firstLetter = str[0];
    let restOfWord = str.slice(1);
    if (firstLetter === firstLetter.toUpperCase() && restOfWord === restOfWord.toLowerCase()) {
        return true;
    }   
    if (firstLetter === firstLetter.toLowerCase() && restOfWord === restOfWord.toLowerCase()) {
        return true;
    }
    if (firstLetter === firstLetter.toUpperCase() && restOfWord === restOfWord.toUpperCase()) {
        return true;
    }
    return false;
}

console.log(capitalization("USA"));
console.log(capitalization("Calvin"));
console.log(capitalization("compUter"));
console.log(capitalization("coding"));
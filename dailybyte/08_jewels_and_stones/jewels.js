/**
 * 
 * Given a String representing stones and another string
 * representing a list of jewels, return the number of 
 * stones that you have that are also jewels.
 * 
 * Ex: Given the following jewels and stones...
 * 
 * jewels = "abc", stones = "ac", return 2
 * jewels = "Af", stones = "AssddfFf", return 3
 * jewels = "AYOPD", stones = "ayopd", return 0
 * 
 */

/**
 * 
 * fn-2 params
 * 
 * let int = 0;
 * iterate through the elements of one param
 * iterate through the elements of second param
 * compare the elements
 * increment int when elements equal
 * return int
 * 
 */

/* Method-1:- For Loops */

/* const common = (jewel, stone) => {
    var int = 0;

    for (let i=0; i < jewel.length; i++){
        for (let j=0; j < stone.length; j++){
            if (jewel[i] === stone [j]){
                int++
            }
        }
    }
    return int;
} */

/* Method-2:- Using Stack */

/* const common = (jewel, stone) => {
    var int = 0;
    var stack = [];
    
    for (let i=0; i < jewel.length; i++){
        stack.push(jewel[i])
    }
    
    for (let j=0; j < stone.length; j++){
        if (stack.includes(stone[j])){
            int++
        }
    }
    return int;
}
*/

/* Method-3:- Using Set */

/* const common = (jewel, stone) => {
    var int = 0;
    var set = new Set(jewel);
    
    for (let i=0; i < stone.length; i++){
        if (set.has(stone[i])){
            int++
        }
    }
    return int;
}

console.log(common("abc", "ac"))
console.log(common("Af", "AaaaddfFf"))
console.log(common("AYOPD", "ayopd")) */





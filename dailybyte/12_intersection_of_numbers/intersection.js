/**
 * 
 * Given two integer arrays, return their intersection.
 * Note: Intersectionis the set of elements common to both arrays.
 * 
 * Ex; Given the following arrays...
 * 
 * num1 = [2, 4, 4, 2], num2 = [2, 4], return [2, 4]
 * num1 = [1, 2, 3, 3], num2 = [3, 3], return [3]
 * num1 = [2, 4, 6, 8], num2 = [1, 3, 5, 7], return []
 * 
 */

function intersection(num1, num2){
    var set1 = new Set(num1);
    var set2 = new Set(num2);
    var intersection = [];
    for (let i of set1){
        if (set2.has(i)){
            intersection.push(i)
        }
    }
    return intersection;
}

console.log(intersection([2,4,4,2],[2,4]))
console.log(intersection([1, 2, 3, 3],[3, 3]))
console.log(intersection([2, 4, 6, 8],[1, 3, 5, 7]))
/* Create a function that reverses a string */

console.log(reverseString("hello"))
console.log(reverseString("12345"))
console.log(reverseString("jacqueline"))

// Method 1 - Using the inbuilt functions

/* 
function reverseString(arr){
    return arr.split("").reverse("").join("")
}*/


// Method 2 - Using a decrementing for loop

/*
function reverseString(str){
    var newString = "";
    for(var i = str.length - 1; i >= 0; i--){
        newString += str[i]
    }
    return newString
}
*/

// Method 3 - Using Recursion

/* function reverseString(str){
    return (str === "") ? "" : reverseString(str.substr(1)) + str.charAt(0)
} */


// Method 4 - Using an incrementing for loop

/*
function reverseString(str){
    var newString = "";
    for(var i = 0; i < str.length; i++){
        newString = str[i] + newString
    }
    return newString
}
*/

// Method 5 - Using the reduce method

function reverseString(str){
    return str.split("").reduce((revString, char) => char + revString, "")
}

// Method 6 - Using the spread operator
/*
function reverseString(str){
    return [...str].reverse().join("")
}
*/

// Method 7 - Using the spread operator and the reduce method

/* function reverseString(str){
    return [...str].reduce((revString, char) => char + revString, "")
} */

// Method 8 - Using a stack

/* function reverseString(str){
    var stack = []
    for(var i = 0; i < str.length; i++){
        stack.push(str[i])
    }
    var reverseStr = ""
    while(stack.length > 0){
        reverseStr += stack.pop()
    }
    return reverseStr
} */

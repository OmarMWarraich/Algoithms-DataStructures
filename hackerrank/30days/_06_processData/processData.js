/** 
*   Given a string, S, of length N that is indexed from 0 to N-1, print its even-indexed and odd-indexed characters as 2
*   
*   space-separated strings on a single line (see the Sample below for more detail).
*   
*   Note:0 is considered to be an even index. 
*
*   Test Case 0:
*   Sample Input:
*   2
*   Hacker
*   Rank
*
*   Sample Output:
*   Hce akr
*   Rn ak
*
*/

function processData(input) {
    //Enter your code here
    var inputArr = input.split("\n");
    var numStrings = parseInt(inputArr[0]);
    var strings = inputArr.slice(1);
    
    for (var i = 0; i < numStrings; i++) {
        var even = "";
        var odd = "";
        for (var j = 0; j < strings[i].length; j++) {
            if (j % 2 === 0) {
                even += strings[i][j];
            } else {
                odd += strings[i][j];
            }
        }
        console.log(even + " " + odd);
    }
}



console.log(processData("2\nHacker\nRank"));
console.log(processData("3\nHacker\nRank\nHackerRank"));
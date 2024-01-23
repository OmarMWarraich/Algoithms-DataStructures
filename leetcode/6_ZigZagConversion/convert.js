// ZigZag Conversion

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
// (you may want to display this pattern in a fixed font for better legibility)
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string text, int nRows);
// convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

// Example 1:
// Input: text = "PAYPALISHIRING", nRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:
// Input: text = "PAYPALISHIRING", nRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// Example 3:
// Input: text = "A", nRows = 1
// Output: "A"

// Constraints:

// 1 <= text.length <= 1000
// text consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= n <= 1000

// Solution: Simulation

// Time: O(n)
// Space: O(n)

// We can use a 2D array to store the zigzag pattern where g[i][j] is the character at row i and column j. Initially, i = 0 and we define a direction variable k, initiated to -1, indicating moving upwards.

// We traverse the string s from left to right. Each time we traverse to a character c, we append it to g[i]. If i = 0 or i = numRows - 1, it means that the current character is at the turning point of the Z-shape arragement, and we reverse the value of k, i.e., k = -k. Next, we update the value of i to i + k, i.e., move up or down one row. Continue to traverse the next character until we have traversed the string s and we return the string concatenated by all rows in g.

var convert = function (s, numRows) {
    if (numRows === 1) return s;

    const g = new Array(numRows).fill(_).map(() => []);
    let i = 0;
    let k = -1;
    for (const c of s) {
        g[i].push[c];
        if (i === 0 || i === numRows - 1) {
            k = -k;
        }
        i += k;
    }
    return g.flat().join("");
};
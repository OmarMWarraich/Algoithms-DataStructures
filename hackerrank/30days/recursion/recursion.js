/**
Recursive Method for Calculating Factorial

Function Description
Complete the factorial function in the editor below. Be sure to use recursion.

factorial has the following paramter:

    int n: an integer

Returns

    int: the factorial of

Input Format

A single integer, n (the argument to pass to factorial).

Constraints

    2 <= n <= 12

    Your submission must contain a recursive function named factorial.

Sample Input

3

Sample Output

6

Explanation

Consider the following steps. After the recursive calls from step 1 to 3, results are accumulated from step 3 to 1.


 */
// Complete the factorial function below using recursion.
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
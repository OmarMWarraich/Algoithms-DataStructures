/* Given a string representing the sequence of moves a robot vacuum makes, 
   return whether or not it will return to its original position. The string 
   will only contain L, R, U, and D characters, representing left, right, up
   , and down respectively.

Ex: Given the following strings...

"LR", return true
"URURD", return false
"RUULLDRD", return true 
*/

function vacuumCleanerRoute(str) {
    let x = 0;
    let y = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'L') {
            x--;
        } else if (str[i] === 'R') {
            x++;
        } else if (str[i] === 'U') {
            y++;
        } else if (str[i] === 'D') {
            y--;
        }
    }
    return x === 0 && y === 0;
}

console.log(vacuumCleanerRoute('LR'));
console.log(vacuumCleanerRoute('URURD'));
console.log(vacuumCleanerRoute('RUULLDRD'));
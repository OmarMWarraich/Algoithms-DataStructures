var prompt = require('prompt');

prompt.start();

/* Method-1: Verify for palindrome using built-in methods */

/* prompt.get(['word'], function (err, result) {
    if (err) { console.log('error') }
    var word = result.word;
    var wordArray = word.split('');
    var reversedWordArray = wordArray.reverse();
    var reversedWord = reversedWordArray.join('');
    if (word === reversedWord) {
        console.log('The word ' + word + ' is a palindrome');
    } else {
        console.log('The word ' + word + ' is not a palindrome');
    }
    }); */

/* Method-2: Verify for palindrome using decrementing for loop */

/* prompt.get(['word'], function (err, result) {
    if (err) { console.log('error') }
    var word = result.word;
    var reversedWord = '';
    for (var i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }
    if (word === reversedWord) {
        console.log('The word ' + word + ' is a palindrome');
    } else {
        console.log('The word ' + word + ' is not a palindrome');
    }
}) */

/* Method-3: Verify for palindrome using recursion */

/* prompt.get(['word'], function (err, result) {
    if (err) { console.log('error') }
    var word = result.word;
    var reversedWord = '';
    function reverseString(word) {
        if (word === "") {
            return "";
        } else {
            return reverseString(word.substr(1)) + word.charAt(0);
        }
    }
    reversedWord = reverseString(word);
    if (word === reversedWord) {
        console.log('The word ' + word + ' is a palindrome');
    }
    else {
        console.log('The word ' + word + ' is not a palindrome');
    }
}) */

/* Method-4: Verify for palindrome using incrementing for loop */

/* prompt.get(['word'], function (err, res) {
    if (err) {console.log('error')}
    var word = res.word;
    var revWord = '';
    for ( let i = 0; i < word.length; i++) {
        revWord = word[i] + revWord
    }
    if (word === revWord){
        console.log(word + " " +'is a palindrome')
    } else {
        console.log(word+" " +'is not a palindrome')
    }
}) */

/* Method-5: Using a stack */

/* prompt.get(['word'], function (err, res) {
    if (err) {console.log('error')}
    var word = res.word;
    var revWord = "";
    function reversedWord(w) {
        let s = []
        for (var i = 0; i < w.length; i++){
            s.push(w[i])
        }
        var r = ""
        while(s.length>0){
            r += s.pop()
        }
        return r
    }
    revWord = reversedWord(word);
    if (word === revWord){
        console.log(word + " " +'is a palindrome')
    } else {
        console.log(word+" " +'is not a palindrome')
    }  
}) */

/* Method-6: Verify for palindrome using reduce */

prompt.get(['word'], function (err, res) {
    if (err) {console.log('error')}
    var word = res.word;
    var revWord = '';
    function reversedWord(w) {
        return w.split("").reduce((r, c) => c + r, "")
    }

    revWord = reversedWord(word)
    
    if (word === revWord){
        console.log(word + " " +'is a palindrome')
    } else {
        console.log(word+" " +'is not a palindrome')
    }
})

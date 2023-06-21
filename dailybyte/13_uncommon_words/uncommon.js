/**
 * 
 * Given two strings representing sentences, return the words that are not
 * common to both strings (i.e, the words that only appear in one of the
 * sentences).
 * 
 * Assumption:- Each sentence is a sequence of words (without punctuation)
 * correctly separated using space characters.
 * 
 * Ex: given the following strings...
 * 
 * sentence1 = "the quick", sentence 2 = "brown fox", 
 * return ["the", "quick", "brown", "fox"]
 * 
 * sentence1 = "the tortoise beat the haire"
 * sentence 2 = "the tortoise lost to the haire"
 * return ["beat", "to", "lost"]
 * 
 * sentence1 = "copper coffee pot"
 * sentence2 = "hot coffee pot"
 * return ["copper", "hot"]
 * 
 */

/* Method-1:- Using Set */
function uncommon(s,t){
    var words = [];

    var sWords = s.split(" ")
    var tWords = t.split(" ")

    var set1 = new Set(sWords)
    var set2 = new Set(tWords)

    for (let i of set1){
        if (!set2.has(i)){
            words.push(i)
        }
    }

    for (let i of set2){
        if (!set1.has(i)){
            words.push(i)
        }
    }

    return words
}


/* Method-2:- Using Map */
/* function uncommon(sentence1, sentence2) {
    const words1 = sentence1.split(" ");
    const words2 = sentence2.split(" ");
    const uncommonWords = [];
    const wordsMap = new Map();

    for (let i = 0; i < words1.length; i++) {
        if (wordsMap.has(words1[i])) {
            wordsMap.set(words1[i], wordsMap.get(words1[i]) + 1);
        } else {
            wordsMap.set(words1[i], 1);
        }
    }

    for (let i = 0; i < words2.length; i++) {
        if (wordsMap.has(words2[i])) {
            wordsMap.set(words2[i], wordsMap.get(words2[i]) + 1);
        } else {
            wordsMap.set(words2[i], 1);
        }
    }

    for (let [key, value] of wordsMap) {
        if (value === 1) {
            uncommonWords.push(key);
        }
    }

    return uncommonWords;

} */




console.log(uncommon("the quick", "brown fox"))
console.log(uncommon("the tortoise beat the haire", "the tortoise lost to the haire"))
console.log(uncommon("copper coffee pot", "hot coffee pot"))

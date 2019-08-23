const fs = require('fs')
const path = require('path');

const filterOutUnusedLetters = (letters) => {
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const scrabble_dictionary = fs.readFileSync(path.join(__dirname,'../../public/scrabble_word_list.txt'))
                            .toString()
                            .split('\r\n')
                            .filter(word => word.length <= 7);
    
    let inversedLetters = alphabet.filter(char => !(letters.includes(char)));
    let filteredList = scrabble_dictionary.filter(word => word.length <= letters.length);
    inversedLetters.forEach(letter => {
        filteredList = filteredList.filter(word => !(word.includes(letter)));
    });
    return filteredList;
}

const getFrequencyOfLetterInWord = (letter, word) => {
    let wordArray = splitWord(word);
    let frequency = 0;
    wordArray.forEach(char => {
        if (char === letter) {
            frequency++;
        }
    });
    return frequency;
}

const splitWord = (word) => word.split('');

const fuseWord = (letter_list) => {
    return letter_list.reduce((acc, letter) => acc + letter, '');
}

const filterWordListByLetterFrequency = (user_letters, word_list) => {
    user_letters.forEach(letter => {
        const userLetterFrequency = getFrequencyOfLetterInWord(letter, fuseWord(user_letters));
        word_list = word_list.filter(word => !(getFrequencyOfLetterInWord(letter, word) > userLetterFrequency));
    });
    return word_list;
}

const convertLetterToPointValue = (letter) => {
    const tileScoreGroups = [ 
        [['A', 'E', 'I', 'O', 'U', 'L', 'N', 'S', 'T', 'R'], 1],
        [['D', 'G'], 2],
        [['B', 'C', 'M', 'P'], 3],
        [['F', 'H', 'V', 'W', 'Y'], 4],
        [['K'], 5],
        [['J', 'X'], 8],
        [['Q', 'Z'], 10]
    ];
    let value = 0;
    tileScoreGroups.forEach(tileGroup => {
        if (tileGroup[0].includes(letter)) {
            value = tileGroup[1];
        }
    });
    return value;
}

const getPointValueOfWord = (word) => {
    const letters = splitWord(word);
    let score = 0;
    letters.forEach(letter => score+=convertLetterToPointValue(letter));
    return score;
}

const getTopThreeBestWords = (words) => {
    const words_with_scores = words.map((word, i) => ([ word, getPointValueOfWord(word) ]));
    let sortedArray = words_with_scores.sort((a,b) => b[1]-a[1]).slice(0,3);
    return sortedArray;
}

const FindScrabbleWordsFromLetters = (letters) => {
    return filterWordListByLetterFrequency(letters, filterOutUnusedLetters(letters));
}

export { filterOutUnusedLetters, filterWordListByLetterFrequency, 
    getFrequencyOfLetterInWord, convertLetterToPointValue, getPointValueOfWord, 
    getTopThreeBestWords, splitWord, fuseWord, 
    FindScrabbleWordsFromLetters as default };







// export const verifySevenLetters = (letters) => {
//     return true;
// }

// letters.forEach(letter => {
//     filteredList = filteredList.filter(word => word.includes(letter));
//     console.log(letter, filteredList.length);
// });
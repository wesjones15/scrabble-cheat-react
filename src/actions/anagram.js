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

const FindScrabbleWordsFromLetters = (letters) => {
    return filterWordListByLetterFrequency(letters, filterOutUnusedLetters(letters));
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
        // console.log(tileGroup[1]);
        if (tileGroup[0].includes(letter)) {
            // console.log("match");
            value = tileGroup[1];
        } else {
            // console.log(tileGroup[0]);
        }
        // for (let i = 0; i < tileGroup[0].length; i++) {
        //     console.log(tileGroup[0][i]);

        //     if (tileGroup[0][i] === letter) {
        //         return tileGroup[1];
        //     }
        // }
    });
    // for (let i = 0; i < tileScoreGroups.length; i++) {
    //     console.log(tileScoreGroups[i][0]);
    //     console.log(tileScoreGroups[i][1]);
    // }
    // return 1;
    return value;
}

export { filterOutUnusedLetters, filterWordListByLetterFrequency, 
    getFrequencyOfLetterInWord, convertLetterToPointValue, 
    splitWord, fuseWord, FindScrabbleWordsFromLetters as default };







// export const verifySevenLetters = (letters) => {
//     return true;
// }

// letters.forEach(letter => {
//     filteredList = filteredList.filter(word => word.includes(letter));
//     console.log(letter, filteredList.length);
// });
const fs = require('fs')
// create array of inputs 
// cross check input array with list of words
// word to score value converter

let scrabble_dictionary = fs.readFileSync('../../public/scrabble_word_list.txt')
                            .toString()
                            .split('\r\n')
                            .filter(word => word.length <= 7);

const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const letter_list = ['B', 'E', 'E', 'T', 'L', 'E'];


const filterOutUnusedLetters = (letters) => {
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
    // word_list.forEach(word => {
    //     user_letters.forEach(letter => {
    //         const dictWordFreq = getFrequencyOfLetterInWord(letter, word);
    //         const userListFreq = getFrequencyOfLetterInWord(letter, fuseWord(user_letters));
    //         if (dictWordFreq > userListFreq) {
    //             word_list.filter(word => )
    //         }
    //     });
    // });

    user_letters.forEach(letter => {
        const userLetterFrequency = getFrequencyOfLetterInWord(letter, fuseWord(user_letters));
        word_list = word_list.filter(word => !(getFrequencyOfLetterInWord(letter, word) > userLetterFrequency));
    });
    return word_list;
}

let list_thin = filterOutUnusedLetters(letter_list);
console.log(list_thin.length);

console.log(filterWordListByLetterFrequency(letter_list, list_thin));

// export const readOnSubmit = (letters) => {
//     console.log(letters);
//     return letters;
// }



// export const verifySevenLetters = (letters) => {
//     return true;
// }

// letters.forEach(letter => {
//     filteredList = filteredList.filter(word => word.includes(letter));
//     console.log(letter, filteredList.length);
// });
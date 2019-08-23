import FindScrabbleWordsFromLetters, 
    {   filterOutUnusedLetters, 
        filterWordListByLetterFrequency, 
        getFrequencyOfLetterInWord, 
        convertLetterToPointValue, 
        getPointValueOfWord, 
        getTopThreeBestWords,
        splitWord, fuseWord } from '../../actions/anagram';

test('should return all possible scrabble words', () => {
    const letters = ['B', 'E', 'E', 'T', 'L', 'E'];
    const result = FindScrabbleWordsFromLetters(letters);
    expect(result.length).toEqual(25);
});

test('should filter out unused letters from word list', () => {
    const letters = ['B', 'E', 'E', 'T', 'L', 'E'];
    const result = filterOutUnusedLetters(letters);
    expect(result.length).toEqual(38);
});

test('should filter word list by letter frequency', () => {
    const words = ['beee','bee', 'be'];
    const letters = ['b','e','e','f'];
    const result = filterWordListByLetterFrequency(letters, words);
    expect(result).toEqual(['bee','be']);
});

test('should return frequency of given letter in a word', () => {
    const result = getFrequencyOfLetterInWord('a', 'banana');
    expect(result).toEqual(3);
});

test('should convert letter to corresponding point value', () => {
    const result = convertLetterToPointValue('A');
    expect(result).toEqual(1);
});

test('should return point value of a word', () => {
    const result = getPointValueOfWord('TUCKER');
    expect(result).toEqual(12);
});

test('should return 3 highest scoring words from list', () => {
    const words = ['TREE','GREEN','APPLE','ZETA','QUOTIENT'];
    const result = getTopThreeBestWords(words);
    expect(result).toEqual([["QUOTIENT", 17], ["ZETA", 13], ["APPLE", 9]]);
});

test('should split string into array of 1 char strings', () => {
    const result = splitWord("GREEN");
    expect(result).toEqual(['G','R','E','E','N']);
});

test('should fust array into string', () => {
    const result = fuseWord(['G','R','E','E','N']);
    expect(result).toEqual("GREEN");
});


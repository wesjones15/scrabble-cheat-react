import { findWordsFromInput, createArrayFromFile } from '../../actions/anagram';

test('should return string', () => {
    const word_arr = ['a','b','c'];
    const action = findWordsFromInput(word_arr);
    expect(action).toBe('abc');
});

test('should parse scrabble txt into array', () => {
    const result = createArrayFromFile();
    expect(result).toBe();
});
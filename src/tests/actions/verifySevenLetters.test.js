import verifySevenLetters from '../../actions/verifySevenLetters';

test('should check string is between 1-7 letters', () => {
    const letters = 'degiras';
    const result = verifySevenLetters(letters);
    expect(result).toBe(true);
});

test('should reject empty string', () => {
    const letters = '';
    const result = verifySevenLetters(letters);
    expect(result).toBe(false);
});

test('should reject string containing numbers', () => {
    const letters = 'rwgin4sk';
    const result = verifySevenLetters(letters);
    expect(result).toBe(false);
});
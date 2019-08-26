export default (letters) => {
    letters = letters.toUpperCase().split('');
    let isInvalid = false;
    letters.forEach(letter => {
        if (!letter.match(/[A-Z]/)) {
            isInvalid = true;
            return false;
        } 
    });
    
    if (!isInvalid) {
        if (letters.length <= 7 && letters.length > 0) return true;
        else return false;
    } else return false;
}

//check string length 1-7
// check string is letters
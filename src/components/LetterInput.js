import React from 'react';
import { connect } from 'react-redux';
import verifySevenLetters from '../actions/verifySevenLetters';
import returnBestWords from '../actions/anagram';

class LetterInput extends React.Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.returnBestWords = this.returnBestWords.bind(this);
        this.state = {
            letters: '',
            results: []
        };
    }

    onInputChange = (e) => {
        const letters = e.target.value.toUpperCase();
        if (verifySevenLetters(letters)) {
            this.setState({letters});
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        const letters = this.state.letters;
        console.log(letters);
        let arr = returnBestWords(letters);
        this.setState({results: arr});
        console.log(arr);
        // console.log(this.state);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h1>Enter your seven letters</h1>
                    <input onChange={this.onInputChange} type="text" value={this.state.letters} />
                    <button>Find</button>
                </form>
                <div>
                    {this.state.results.map(result => (
                        <p>{result[0]} {result[1]}</p>
                    ))}
                </div>
            </div>
            
        );
    }
    
};

// const mapDispatchToProps = (dispatch) => ({
//     returnBestWords: (letters) => dispatch(returnBestWords(letters)),
//     verifySevenLetters: (letters) => dispatch(verifySevenLetters(letters))
// });

// export default connect(undefined, mapDispatchToProps)(LetterInput);

export default LetterInput;
import React from 'react';
// import { connect } from 'react-redux';
import verifySevenLetters from '../actions/verifySevenLetters';
import returnBestWords from '../actions/anagram';

class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.returnBestWords = this.returnBestWords.bind(this);
        this.state = {
            letters: ''
        };
    }

    onInputChange = (e) => {
        const letters = e.target.value;
        if (verifySevenLetters(letters)) {
            this.setState(() => ({ letters }));
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        const letters = this.state.letters;
        this.props.returnBestWords(letters);
        // console.log(this.state);
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Enter your seven letters</h1>
                <input onChange={this.onInputChange} type="text"/>
                <button>Find</button>
            </form>
        );
    }
    
};

export default InputComponent;

// take 7 separate 1 char inputs (ideally it will auto switch to next input on entry)
// set into array of strings
// pass through function that finds words from a text file that match 
import React from 'react';
import { connect } from 'react-redux';

import { readOnSubmit } from '../actions/anagram';

class LetterInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            letters: ''
        };
    }

    onInputChange = (e) => {
        const letters = e.target.value;
        this.setState(() => ({ letters }));
        // console.log(this.state);
    };

    onSubmit = (e) => {
        e.preventDefault();
        const letters = this.state.letters;
        this.props.readOnSubmit(letters);
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

const mapDispatchToProps = (dispatch) => ({
    readOnSubmit: (letters) => dispatch(readOnSubmit(letters))
});

export default connect(undefined, mapDispatchToProps)(LetterInput);

// take 7 separate 1 char inputs (ideally it will auto switch to next input on entry)
// set into array of strings
// pass through function that finds words from a text file that match 
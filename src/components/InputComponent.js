import React, { useState } from 'react';
// import { connect } from 'react-redux';
import verifySevenLetters from '../actions/verifySevenLetters';
import returnBestWords from '../actions/anagram';

const InputComponent = (props) => {
    const [letters, setLetters] = useState(props.letters);
    const [results, setResults] = useState();

    const onInputChange = (e) => {
        const letters__toVerify = e.target.value.toUpperCase();
        if (verifySevenLetters(letters__toVerify)) {
            setLetters(letters__toVerify);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        let resultsIn = returnBestWords(letters);
        setResults(resultsIn);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>Enter your seven letters</h1>
                <input onChange={onInputChange} type="text" value={letters} />
                <button>Find</button>
            </form>
            <div>
                { results ? 
                    results.map((result, i) => (
                    <p>{result[0]}  {result[1]}</p>
                    )) : (<div />)
                }
            </div>
        </div>
    );
}

InputComponent.defaultProps = { letters: "TESTLET" };

export default InputComponent;
import React from 'react';
import { shallow } from 'enzyme';
import LetterInput from '../../components/LetterInput';

test('should correctly render LetterInput component', () => {
    const wrapper = shallow(<LetterInput />);
    expect(wrapper).toMatchSnapshot();
});

test('should should save text inputs to array', () => {
    
});

// test the input to make sure it only allows one letter per box 
// ensure type of character is letter 
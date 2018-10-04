import React from 'react';
import { shallow } from 'enzyme';
import InputTextBox from './InputTextBox';

describe('InputTextBox', () => {

  let inputTextBox;

  beforeEach(() => {
    inputTextBox = shallow(<InputTextBox errors={[]} />);
  });

  it('should be defined on render', () => {
    expect(inputTextBox).toBeDefined();
  });

  it('should have input element in the DOM', () => {
    const input = inputTextBox.find('input');

    expect(input.length).toEqual(1);
  });

  it('should have icon element in the DOM', () => {
    const icon = inputTextBox.find('FontAwesomeIcon');

    expect(icon.length).toEqual(1);
  });

  it('should have valid feedback container element in the DOM', () => {
    const feedback = inputTextBox.find('.valid-feedback');

    expect(feedback.length).toEqual(1);
  });

  it('should invoked changed method passed through props on onChange', () => {
    const changed = jest.fn();
    const inputTextBox = shallow(<InputTextBox errors={[]} changed={changed} />);

    inputTextBox.find('input').simulate('change');

    expect(changed.mock.calls.length).toEqual(1);
  });

});

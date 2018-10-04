import React from 'react';

import './InputTextBox.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const InputTextBox = (props) => {

  const inputClasses = ['form-control'];
  let errorMessages = [];

  if (!props.valid && props.touched) {
    inputClasses.push('is-invalid');
  }

  errorMessages = props.errors.map(errorName => {
    switch (errorName) {
      case 'required': {
        return `Field is required`;
        break;
      }
      case 'minLength': {
        return `Field should be at least ${props.validation.minLength} character`
        break;
      }
      case 'maxLength': {
        return `Field should be maximum of ${props.validation.maxLength} characters`;
        break;
      }
      case 'isAlpha': {
        return `Field should only contain letters`
      }
    }
  });

  return (
    <div className="row justify-content-md-center">
      <div className="col-6" >
        <div className="input-group">
          <input
            type="text"
            className={inputClasses.join(' ')}
            placeholder="Search..."
            aria-label="Amount (to the nearest dollar)"
            onChange={props.changed}
             />
          <div className="input-group-append">
            <span className="input-group-text">
              <span className="input-group-addon">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </span>
          </div>
          <div className={props.errors.length === 0 ? 'valid-feedback' : 'invalid-feedback'}>
            {errorMessages.map((errorMsg, index) => (
              <div key={index}>{errorMsg}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

}

export default InputTextBox;
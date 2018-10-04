import React, { Component } from 'react';
import { connect } from 'react-redux';

import './SearchForm.css';

import fakeApi from '../../mockedApi';

import { setOverlayVisibility } from '../../redux/modules/Overlay';
import { fetchFacilityDataStart, fetchFacilityData, fetchFacilityDataError } from '../../redux/modules/SearchForm';
import InputTextBox from '../../components/InputTextBox/InputTextBox';

export class SearchForm extends Component {

  constructor() {

    super();
    fakeApi();

    this.state = {
      searchForm: {
        searchInput : {
          value: '',
          validation: {
            required: true,
            minLength: 1,
            maxLength: 10,
            isAlpha: true
          },
          valid: false,
          errors: [],
          touched: false
        }
      },
      val2: null
    }

  }

  getInputInvalidities = (value, rules) => {
    let isValid;
    let errors = [];

    if (!rules) {
      return [];
    }

    if (rules.required) {
      isValid = value.trim() !== '';
      if (!isValid) {
        errors.push('required');
      }
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength;
      if (!isValid) {
        errors.push('minLength');
      }
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength;
      if (!isValid) {
        errors.push('maxLength');
      }
    }

    if (rules.isAlpha) {
        const pattern = /^[a-zA-Z]+$/;
        isValid = pattern.test(value);
        if (!isValid) {
          errors.push('isAlpha');
        }
    }

    return errors;
  }

  changeValue = (event) => {
    const updatedSearchForm = {
      ...this.state.searchForm
    };
    const updatedSearchValue = {
      ...updatedSearchForm.searchInput
    }
    updatedSearchValue.value = event.target.value;
    let inputErrors = this.getInputInvalidities(updatedSearchValue.value, updatedSearchValue.validation);
    updatedSearchValue.valid = inputErrors.length === 0 ? true : false;
    updatedSearchValue.touched = true;
    updatedSearchValue.errors = inputErrors;
    updatedSearchForm.searchInput = updatedSearchValue;

    this.setState(prevState => ({
       searchForm: updatedSearchForm })
    );
  }

  submitSearchForm = (event) => {
    event.preventDefault();

    fetch(`http://fubar.com/person/${event.target.value}`)
      .then(response => response.json())
      .catch(error => console.log('Error in fetching person:', error))
      .then(response => {
        this.setState(() => ({ val2: response.val2 }));
        this.props.fetchFacilityDataStart();
        return fetch(`http://fubar.com/facility/${response.val1}`);
      })
      .then(response => response.json())
      .catch(error => this.props.fetchFacilityDataError({error: error}))
      .then(response => {
        this.props.fetchFacilityData(response);
        return fetch(`http://fubar.com/exposure/${this.state.val2}`);
      })
      .then(response => {
        this.props.setOverlayVisibility({isOverlayVisible: true});
      })
      .catch(error => console.log('Error in fetching exposure:', error));
  }

  render() {
    return (
      <form className="search" onSubmit={this.submitSearchForm}>
        <InputTextBox
          valid={this.state.searchForm.searchInput.valid}
          changed={this.changeValue}
          errors={this.state.searchForm.searchInput.errors}
          validation={this.state.searchForm.searchInput.validation}
          touched={this.state.searchForm.searchInput.touched}/>
        <button
          className="btn btn-primary search__btn"
          type="submit"
          disabled={this.state.searchForm.searchInput.errors.length >= 1}>
          Search
        </button>
      </form>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    fetchFacilityDataStart: () => dispatch(fetchFacilityDataStart()),
    fetchFacilityDataError: (data) => dispatch(fetchFacilityDataError(data)),
    fetchFacilityData: (data) => dispatch(fetchFacilityData(data)),
    setOverlayVisibility: (data) => dispatch(setOverlayVisibility(data))
  };
}

export default connect(null, mapDispatchToProps)(SearchForm);

import React from 'react';
import { shallow, mount } from 'enzyme';

import { SearchForm } from './SearchForm';

describe('SearchForm', () => {

  let searchForm;

  beforeEach(() => {
    searchForm = shallow(<SearchForm />);
  });

  describe('initial setup->', () => {

    it('renders without crashing', () => {
      expect(searchForm).toBeDefined();
    });

    it('should equal to default initialState when is created', () =>{
      const initialState = {
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

      expect(searchForm.state()).toEqual(initialState);
    });

  });

  describe('getInputInvalidities->', () => {

    it('should return an empty array of errors when valid value is passed', () => {
      const searchForm = new SearchForm();
      const validValue = 'Foo';

      const errors = searchForm.getInputInvalidities(validValue, searchForm.state.searchForm.searchInput.validation);

      expect(errors).toHaveLength(0);

    });

    it('should return required error when empty value is passed', () => {
      const searchForm = new SearchForm();
      const validValue = '';

      const errors = searchForm.getInputInvalidities(validValue, searchForm.state.searchForm.searchInput.validation);

      expect(errors[0]).toEqual('required');
    });

    it('should return minLength error when empty value is passed', () => {
      const searchForm = new SearchForm();
      const validValue = '';

      const errors = searchForm.getInputInvalidities(validValue, searchForm.state.searchForm.searchInput.validation);

      expect(errors[1]).toEqual('minLength');
    });

    it('should return maxLength error when value exceeds 10 characters', () => {
      const searchForm = new SearchForm();
      const validValue = 'Test Test Test';

      const errors = searchForm.getInputInvalidities(validValue, searchForm.state.searchForm.searchInput.validation);

      expect(errors[0]).toEqual('maxLength');
    });

    it('should return isAlpha error when value contains numbers', () => {
      const searchForm = new SearchForm();
      const validValue = '14';

      const errors = searchForm.getInputInvalidities(validValue, searchForm.state.searchForm.searchInput.validation);

      expect(errors[0]).toEqual('isAlpha');
    });

  });

  describe('changeValue->', () => {

    it('should update values state', () => {
      const searchForm = mount(<SearchForm />)

      searchForm.find('input').simulate('change', { target: { value: 'Hello' }});

      expect(searchForm.state().searchForm.searchInput.value).toEqual('Hello');
    });

    it('should update input touched state on first change', () => {
      const searchForm = mount(<SearchForm />)

      searchForm.find('input').simulate('change', { target: { value: 'a' }});

      expect(searchForm.state().searchForm.searchInput.touched).toBeTruthy();
    });

    it('should update input valid state to true on first change', () => {
      const searchForm = mount(<SearchForm />)

      searchForm.find('input').simulate('change', { target: { value: 'a' }});

      expect(searchForm.state().searchForm.searchInput.valid).toBeTruthy();
    });

  });

});

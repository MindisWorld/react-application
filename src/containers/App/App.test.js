import React from 'react';
import {shallow} from 'enzyme';

import App from './App';
import OverlayContainer from '../OverlayContainer/OverlayContainer';
import SearchForm from '../../containers/SearchForm/SearchForm';

describe('App', () => {

  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(app).toBeDefined();
  });

  it('should render SearchForm element in the DOM', () => {
    const searchForm = app.find(SearchForm);

    expect(searchForm).toHaveLength(1);
  });

  it('should render OverlayContainer element in the DOM', () => {
    const overlayContainer = app.find(OverlayContainer);

    expect(overlayContainer).toHaveLength(1);
});

});

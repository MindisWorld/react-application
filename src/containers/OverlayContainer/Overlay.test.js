import React from 'react';
import {shallow} from 'enzyme';

import { OverlayContainer } from './OverlayContainer';

describe('Overlay', () => {

  let overlayContainer;

  beforeEach(() => {
    overlayContainer = shallow(<OverlayContainer />);
  });

  it('renders without crashing', () => {
    expect(overlayContainer).toBeDefined();
  });

  it('should multiply 4 & 4 and should be equal 16', () => {
    const overlayContainer = new OverlayContainer();

    expect(overlayContainer.multiply(4,4)).toBe(16);
  });

});

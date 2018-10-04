import React from 'react';
import { shallow } from 'enzyme';

import Overlay from './Overlay';

describe('Overlay', () => {

  let overlay;

  beforeEach(() => {
    overlay = shallow(<Overlay />);
  });

  it('renders without crashing', () => {
    expect(overlay).toBeDefined();
  });

  it('should render container element with class container', () => {
    const overlayContainer = overlay.find('.overlay');

    expect(overlayContainer).toHaveLength(1);
  });

  it('should render text in overlay', () => {
    const overlayText = overlay.find('.overlay__text');

    expect(overlayText).toHaveLength(1);
  });

  it('should onClick invoke props method closeOverlay', () => {
    const closeOverlay = jest.fn();
    const overlay = shallow(<Overlay closeOverlay={closeOverlay}/>);

    overlay.simulate('click');

    expect(closeOverlay.mock.calls.length).toBe(1);
  });


});

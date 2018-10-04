import React from 'react';

import './Overlay.css';

const Overlay = (props) => {

  return (
    <div className="overlay" onClick={props.closeOverlay}>
      <span className="overlay__text">
        {props.children}
      </span>
    </div>
  );

}

export default Overlay;
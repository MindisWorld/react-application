import React, { Component } from 'react';
import { connect } from 'react-redux';

import Overlay from '../../components/Overlay/Overlay';

export class OverlayContainer extends Component {

  closeOverlay = () => {
    this.props.setOverlayVisibility({isOverlayVisible: false});
  }

  multiply = (val1, val2) => {
    if (val1 && val2) {
      return val1*val2;
    }
  }

  render() {
    return (
      <div>
        {this.props.isOverlayVisible ?
          <Overlay
            closeOverlay={this.closeOverlay}>
              {this.multiply(this.props.val3, this.props.val4)}
          </Overlay> :
            null
        }
      </div>
    );
  }

}

const mapStateToProps = ({searchFormReducer, overlayReducer}) => {
  return {
    val3: searchFormReducer.val3,
    val4: searchFormReducer.val4,
    isOverlayVisible: overlayReducer.isOverlayVisible
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setOverlayVisibility: (data) => dispatch({type: 'SET_OVERLAY_VISIBILITY', ...data})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OverlayContainer);
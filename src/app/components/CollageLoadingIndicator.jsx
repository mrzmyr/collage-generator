require("react-spinner/react-spinner.css");
require("../../scss/collage-loading-indicator.scss");

import React from 'react';
import Spinner from 'react-spinner';

class CollageLoadingIndicator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.loading) {
      return (
        <div className="collage-loading-indicator">
          <Spinner />
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

export default CollageLoadingIndicator;
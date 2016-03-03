import React from 'react';

class CollageType1 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div id="collage-1-1" style={this.props.styles[0]} className="h-100 col-xs"></div>
        <div className="col-xs">
          <div className="row">
            <div id="collage-1-2" style={this.props.styles[1]} className="h-50 col-xs"></div>
          </div>
          <div className="row">
            <div id="collage-1-2" style={this.props.styles[2]} className="h-50 col-xs"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default CollageType1;
import React from 'react';

class CollageType4 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div id="collage-4-1" style={this.props.styles[0]} className="h-50 col-xs-5"></div>
          <div id="collage-4-2" style={this.props.styles[1]} className="h-50 col-xs-7"></div>
        </div>
        <div className="row">
          <div id="collage-4-3" style={this.props.styles[2]} className="h-50 col-xs-7"></div>
          <div id="collage-4-4" style={this.props.styles[3]} className="h-50 col-xs-5"></div>
        </div>
      </div>
    )
  }
}

export default CollageType4;
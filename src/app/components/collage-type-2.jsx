import React from 'react';

class CollageType2 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div id="collage-2-1" style={this.props.styles[0]} className="h-50 col-xs"></div>
          <div id="collage-2-2" style={this.props.styles[1]} className="h-50 col-xs"></div>
        </div>
        <div className="row">
          <div id="collage-2-3" style={this.props.styles[2]} className="h-50 col-xs"></div>
          <div id="collage-2-4" style={this.props.styles[3]} className="h-50 col-xs"></div>
        </div>
      </div>
    )
  }
}

export default CollageType2;
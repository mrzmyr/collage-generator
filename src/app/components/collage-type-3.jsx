import React from 'react';

class CollageType3 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div id="collage-3-1" style={this.props.styles[0]} className="h-100 col-xs"></div>
          <div id="collage-3-2" style={this.props.styles[1]} className="h-100 col-xs"></div>
          <div id="collage-3-3" style={this.props.styles[2]} className="h-100 col-xs"></div>
        </div>
      </div>
    )
  }
}

export default CollageType3;
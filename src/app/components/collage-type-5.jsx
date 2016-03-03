import React from 'react';

class CollageType5 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs">
          <div className="row">
            <div id="collage-5-1" style={this.props.styles[0]} className="h-50 col-xs"></div>
          </div>
          <div className="row">
            <div id="collage-5-2" style={this.props.styles[1]} className="h-50 col-xs"></div>
          </div>
        </div>
        <div id="collage-5-3" style={this.props.styles[2]} className="h-100 col-xs"></div>
      </div>
    )
  }
}

export default CollageType5;
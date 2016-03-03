import React from 'react';
import ReactDOM from 'react-dom';

class DropZone extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.element = ReactDOM.findDOMNode(this);
    
    this.element.addEventListener('dragover', this._handleDragOver.bind(this), false);
    this.element.addEventListener('drop', this._handleFileSelect.bind(this), false);
  }

  componentWillUnmount () {
    this.element.removeEventListener('dragover', this._handleDragOver.bind(this), false);
    this.element.removeEventListener('drop', this._handleFileSelect.bind(this), false);
  }

  _handleDragOver (evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
  }

  _handleFileSelect (evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files;

    this.props.onDrop(files);
  }

  render() {
    return (
      <div id={this.props.id}>
        {this.props.children}
      </div>
    )
  }
}

DropZone.propTypes = {
  onDrop: React.PropTypes.func.isRequired
}

export default DropZone;

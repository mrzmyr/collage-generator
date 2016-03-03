require("flexboxgrid/dist/flexboxgrid.css");
require("../scss/style.scss");

import React from 'react';
import {render} from 'react-dom';

import DropZone from './components/DropZone.jsx';
import Collage from './components/Collage.jsx';

import FileReaderHelper from './services/file-reader.js';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.FileReaderHelper = new FileReaderHelper();

    this.state = {
      images: []
    };
  }

  onDrop (files) {
    this.FileReaderHelper
      .getRawImageData(files)
      .then((images) => {
        this.setState({
          images: images
        })
      })
  }

  render () {
    return (
      <DropZone onDrop={this.onDrop.bind(this)}>
        <h1>Collage Generator</h1>

        <Collage type={1} images={this.state.images} />
        <Collage type={2} images={this.state.images} />
        <Collage type={3} images={this.state.images} />
        <Collage type={4} images={this.state.images} />
        <Collage type={5} images={this.state.images} />
      </DropZone>
    )
  }
}

render(<App/>, document.getElementById('app'));
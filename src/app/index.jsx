require("flexboxgrid/dist/flexboxgrid.css");
require("../scss/style.scss");

import React from 'react';
import {render} from 'react-dom';

import DropZone from './components/DropZone.jsx';
import Collage from './components/Collage.jsx';

import FileReaderHelper from './services/file-reader.js';

import { shuffle } from './services/utils.js';

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

  shuffleImages () {
    this.setState({
      images: shuffle(this.state.images)
    })
  }

  render () {
    return (
      <DropZone onDrop={this.onDrop.bind(this)}>
        <h1>Collage Generator</h1>
        <div>
          <a onClick={this.shuffleImages.bind(this)} className={ !this.state.images.length ? 'link--disabled' : '' } href="javascript:;">
            <svg height="16px" viewBox="0 0 16 16" width="16px">
              <g fill="#fff" id="Group" transform="translate(-384.000000, -96.000000)">
                <path d="M393,109 L391.383673,106.844897 L392.637981,105.183975 L394,107 L396,107 L396,105 L400,108 L396,111 L396,109 Z M388.383673,102.844897 L387,101 L384,101 L384,99 L388,99 L389.637981,101.183975 Z M393.04248,99 L396,99 L396,97 L400,100 L396,103 L396,101 L394.04248,101 L388.000977,109 L384,109 L384,107 L387.000977,107 Z M393.04248,99" id="Shape"/>
              </g>
            </svg>
          </a>
        </div>

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
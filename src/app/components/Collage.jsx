require("../../scss/collage.scss");

import React from 'react';
import ReactDOM from 'react-dom';

import CollageLoadingIndicator from './CollageLoadingIndicator.jsx';
import html2canvas from 'html2canvas';

import CollageType1 from './collage-type-1.jsx';
import CollageType2 from './collage-type-2.jsx';
import CollageType3 from './collage-type-3.jsx';
import CollageType4 from './collage-type-4.jsx';
import CollageType5 from './collage-type-5.jsx';

var CollageTypes = {
  CollageType1: CollageType1,
  CollageType2: CollageType2,
  CollageType3: CollageType3,
  CollageType4: CollageType4,
  CollageType5: CollageType5,
}

class Collage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sizedUp: false,
      loading: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.images !== this.props.images) {
      this.setState({
        generated: false
      })
    }
  }

  onGenerate() {

    var element = document.getElementById(`collage-${this.props.type}`);

    this.setState({
      loading: true
    })

    setTimeout(() => {
      html2canvas(element)
        .then((canvas) => {

        var btn = element.nextSibling;
        var dataUrl = canvas.toDataURL();

        btn.href = dataUrl;
        btn.download = `${Math.floor(Math.random() * 999999999)}.png`;

        this.setState({
          loading: false,
          generated: true
        })
      });
    }, 100);
  }

  render() {
    var styles = {};

    this.props.images.forEach(function (image, index) {
      styles[index] = { backgroundImage: `url(${image.uri})` }
    });

    var CollageName = CollageTypes['CollageType' + this.props.type];

    return (
      <div className="collage-container">
        <CollageLoadingIndicator loading={this.state.loading} />
        <div 
          className={ !this.state.loading ? 'collage' : 'collage collage--loading' } 
          id={ 'collage-' + this.props.type }
        >
          <CollageName styles={styles} />
        </div>


        {(() => {
          if(this.state.generated) {
            return (
              <a className={ !this.props.images.length ? 'take-snapshot link--disabled' : 'take-snapshot' } href="javascript:;">
                <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#FFF" d="M16 11h5l-9 10-9-10h5v-11h8v11zm1 11h-10v2h10v-2z"/></svg>
              </a>
            )
          } else {
            return (
              <a onClick={this.onGenerate.bind(this)} className={ !this.props.images.length ? 'take-snapshot link--disabled' : 'take-snapshot' } href="javascript:;">
                <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#FFF" d="M24 14v-4h-3.23c-.229-1.003-.624-1.94-1.156-2.785l2.286-2.286-2.83-2.829-2.286 2.286c-.845-.532-1.781-.928-2.784-1.156v-3.23h-4v3.23c-1.003.228-1.94.625-2.785 1.157l-2.286-2.286-2.829 2.828 2.287 2.287c-.533.845-.928 1.781-1.157 2.784h-3.23v4h3.23c.229 1.003.624 1.939 1.156 2.784l-2.286 2.287 2.829 2.829 2.286-2.286c.845.531 1.782.928 2.785 1.156v3.23h4v-3.23c1.003-.228 1.939-.624 2.784-1.156l2.286 2.286 2.828-2.829-2.285-2.286c.532-.845.928-1.782 1.156-2.785h3.231zm-12 2c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
              </a>
            )
          }
        })()}
      </div>
    );
  }

}

Collage.propTypes = {
  type: React.PropTypes.number.isRequired
}

Collage.defaultProps = {
  images: []
}

export default Collage;
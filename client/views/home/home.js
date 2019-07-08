import React, { Component } from 'react';
import './home.scss'
import image from '../../img.png'


class Home extends Component {
  render() {
    return (
        <div>
          <h2 class='text'>Link to wiki Url</h2>
          <img class='image' src={image} alt="Paris" />
          <h4 class='text'>CENI NEs overlayed on map</h4>
        </div>
    );
  }
}

export default Home;
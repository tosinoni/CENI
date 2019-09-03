import React, { Component } from 'react';
import './home.scss'
import image from '../../img.png'


class Home extends Component {
  render() {
    return (
        <div class="home">
          <img class='image' src={image} alt="Paris" />
        </div>
    );
  }
}

export default Home;
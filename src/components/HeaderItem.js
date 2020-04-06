import React, { Component } from 'react';
import goback from '../goback.png';
import logocoderx from '../logocoderx.png';
import '../App.css';

class HeaderItem extends Component {
  render() {
    return (
      <div>
        <div className='HeaderItem'>
          <div>
            <span>Go back</span>
            <span>
              <img src={goback} />
            </span>
          </div>
          <div>
            <img src={logocoderx} />
          </div>
          <div>
            <button class='sign-btn'>Sign up</button>
          </div>
        </div>
        <h1>Sign In</h1>
      </div>
    );
  }
}

export default HeaderItem;

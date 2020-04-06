import React, { Component } from 'react';
import '../App.css';

class HeaderItem extends Component {
  render() {
    return (
      <div className='FormItem'>
        <input size='20' placeholder='username'></input>
        <input size='20' placeholder='password'></input>
        <button>Sign up to coderX</button>
        <div>
          <input type='checkbox' name='vehicle1' value='Bike'></input>
          <span>Keep me sign in</span>
        </div>
        <div>
          <a href='#'>For got username?</a>
          <a href='#'>For got password?</a>
        </div>
      </div>
    );
  }
}

export default HeaderItem;

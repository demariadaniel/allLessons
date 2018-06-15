import React, { Component } from 'react';
import HeaderC from './HeaderC';
import '../../App.css';

class HeaderB extends Component {
  render() {
    return (
      <header className="header-B">
        <HeaderC />
      </header>
    )
  }
}

export default HeaderB;
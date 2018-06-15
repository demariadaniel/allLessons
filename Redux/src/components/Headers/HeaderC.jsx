import React, { Component } from 'react';
import HeaderD from './HeaderD';
import '../../App.css';

class HeaderC extends Component {
  render() {
    return (
      <header className="header-C">
        <HeaderD />
      </header>
    )
  }
}

export default HeaderC;
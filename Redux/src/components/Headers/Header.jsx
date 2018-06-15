import React, { Component } from 'react';
import HeaderB from './HeaderB';
import '../../App.css';

class Header extends Component {
  render() {
    return (
      <header className="header-A">
        <HeaderB />
      </header>
    )
  }
}

export default Header;
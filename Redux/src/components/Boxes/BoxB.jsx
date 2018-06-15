import React, { Component } from 'react';
import BoxC from './BoxC'
import '../../App.css';

class BoxB extends Component {
  render() {
    return (
      <div className="box-B">
        <BoxC />
      </div>
    );
  }
}

export default BoxB;
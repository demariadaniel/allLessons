import React, { Component } from 'react';
import BoxE from './BoxE'
import '../../App.css';

class BoxD extends Component {
  render() {
    return (
      <div className="box-D">
        <BoxE />
      </div>
    );
  }
}

export default BoxD;
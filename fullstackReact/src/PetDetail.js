import React, {Component} from 'react';

const PetDetail = ({name, breed, age}) => (
  <div className="items">
    <h1>
      {name}
    </h1>
    <h3>
      {breed}
    </h3>
    <p>
      {age}
    </p>
  </div>
)

export default PetDetail;
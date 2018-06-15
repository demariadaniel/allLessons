import React, {Component} from 'react';

// PetDetail is a stateless functional component, i.e. a function that
// returns JSX w/ no state. We extract our name, breed and age values
// from this.props. Since every Pet has name, breed and age, this component
// is reusable for every pet. 'Dumb' components like this are ideal
// because they contain very little logic; once they're done, they're done!

const PetDetail = ({name, breed, age, image}) => (
  <div className="items">
    <h1>
      {name}
    </h1>
    <img src={image} />
    <h3>
      {breed}
    </h3>
    <p>
      {age}
    </p>
  </div>
)

export default PetDetail;
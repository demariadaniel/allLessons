import React, { Component } from 'react';

class ProfilePage extends Component {
  render(){
    console.log(this.props)
    let dogObject = this.props.dogs.filter(dog=>
      dog.name === this.props.match.params.dogName)[0]
    return(
      <div>
      {dogObject ?
        <div>
          <h1>{this.props.match.params.dogName} Profile</h1>
          <p>Breed: {dogObject.breed}</p>
          <p>Age: {dogObject.age}</p>
        </div>
      :
        <div>
          <p>Sorry that dog was not found!</p>
        </div>
      }
      </div>
    )
  }
}

export default ProfilePage;
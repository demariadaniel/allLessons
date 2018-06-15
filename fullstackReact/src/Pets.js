import React, {Component} from 'react';
import {Switch, Link, Route} from 'react-router-dom';
import PetDetail from './PetDetail';

class Pets extends Component {
  render(){
    console.log(this.props)
    const {match} = this.props;
    return(
      <div>
        <div>
          <h2>{this.props.petsObject.type}</h2>
          {this.props.petsObject.pets.map( pet => (
              <Link to={`${match.url}/${pet.name}`}>
                <div className="pet">
                  <p>{pet.name}</p>
                </div>
              </Link>
            )
          )}
        </div>
          <Switch>
          {this.props.petsObject.pets.map(pet=>(
            <Route 
              path={`${match.url}/${pet.name}`}
              render={()=>(
                <PetDetail 
                  {...pet} />
              )} />
            ))
          }
          </Switch>
      </div>
    )
  }
}

export default Pets;
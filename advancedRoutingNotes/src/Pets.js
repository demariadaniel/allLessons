import React, {Component} from 'react';
import {Switch, Link, Route} from 'react-router-dom';
import PetDetail from './PetDetail';

class Pets extends Component {
  render(){
    // Shows we have received all the router data through props
    console.log(this.props)
    // Allows us to write 'match' vs. needing to write this.props.match
    const {match} = this.props;
    return(
      <div>
        <div>
          {/* Display the Type of pet selected i.e. Cats */}
          <h2>{this.props.petsObject.type}</h2>
          {/* Links per Pet */}
          {this.props.petsObject.pets.map( pet => (
              <Link to={`${match.url}/${pet.name}`}>
                <div className="pet">
                  <p>{pet.name}</p>
                </div>
              </Link>
            )
          )}
        </div>
          {/* Routes per Pet */}
          {/* In render we use a template PetDetail component for every
              single pet. Remember this approach is ideal if your data
              (i.e. pet objects) have identical keys, values & overall
              structure and needs tailoring if you have different data sets */}
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
          {/* Rather than writing name={pet.name} etc., we can use {...}
              syntax to do this automatically for every key */}
          </Switch>
      </div>
    )
  }
}

export default Pets;
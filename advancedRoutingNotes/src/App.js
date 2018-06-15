import React, { Component } from 'react';
import logo from './logo.svg';
import {Link, Switch, Route} from 'react-router-dom';
import Pets from './Pets';
import './App.css';

class App extends Component {
  // Our state contains an array, pets, which contains 'Pet Type' objects
  // for each species of pet. I chose objects b/c it allows us to include
  // meta data such as which 'type' of pet. Each object also includes an
  // array of individual pets with their own details.
  state={
    pets: [
      {
        type: "Cats",
        pets: [
          {name: 'Winter', breed: 'Calico', age: 2},
          {name: 'Leonard', breed: 'Persian', age: 8},
          {name: 'Sarah', breed: 'Siamese', age: 7}
        ]
      },
      {
        type: 'Dogs',
        pets: [
          {name: 'Buddy', breed: 'Hound', age: 11},
          {name: 'Louis', breed: 'Pitbull', age: 3},
          {name: 'Moose', breed: 'Mutt', age: 5}
        ]
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
        {/* Links per Pet Category */}
        {/* Here we create one Link for each Pet Type object:
            one Link for Dogs, one Link for Cats.
          If we add more types (Fish, Birds) .map() has us covered.
          We use template literals to include the 'Type' of pet
          in the URL.   */}
          {this.state.pets.map( petType =>(
            <Link to={`/pets/${petType.type}`}>
                <p>{petType.type}</p>
            </Link>
          ))}
        </div>
        <div className="App-intro">
          {/* Routes per Pet Category */}
          <Switch>
          {/* With multiple Links pointing to multiple URLS, we need
            corresponding Routes to handle those addresses. Here we
            map each Pet Type onto a Route. We have created a template
            <Pets /> component which we will use for every pet type. 
            Whenever we need to pass props to a component associated with
            a Route, we use the render prop. This prop expects a function
            which returns a Component (or JSX). Notice that we include
            an argument called routerProps; if we wish to use React
            Router properties such as this.props.location, you have to
            pass these down in this manner.  */}
            {this.state.pets.map(petType =>(
              <Route 
                path={`/pets/${petType.type}`}
                render={(routerProps)=>(
                  <Pets 
                    {...routerProps} 
                    petsObject={petType} />
                )} />
              ))
            }
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
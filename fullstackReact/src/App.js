import React, { Component } from 'react';
import logo from './logo.svg';
import {Link, Switch, Route} from 'react-router-dom';
import Pets from './Pets';
import './App.css';

class App extends Component {
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
          {this.state.pets.map( petType =>(
            <Link to={`/pets/${petType.type}`}>
                <p>{petType.type}</p>
            </Link>
          ))}
        </div>
        <div className="App-intro">
          <Switch>
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
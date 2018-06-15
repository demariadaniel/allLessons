import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProfilePage from './ProfilePage';
import {Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      beers: [],
      dogs: []
    }
    // ^^^ We always need default state data whenever our page depends on it.
    // An empty array will work fine as a placeholder until we get actual data
  }
  componentDidMount(){
    // In a real application, all of our data will live on the server, and our
    // front end app is like an empty template to be filled with data.
    // But, you want that data as soon as the page loads.
    // Here we use componentDidMount to automatically load server data on page load.
    console.log('dogs were got')
    axios.get('http://localhost:8080/dogs')
      .then(res=> {
        console.log(res.data)
        this.setState({
          dogs: res.data.dogs
        })
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img 
            src={logo} 
            className="App-logo" 
            alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.dogs.map(dog=>(
          <Link to={`/dogs/${dog.name}`}>
            <li>{dog.name}</li>
          </Link>
          )
        )}
        {/* ^^^ Here we create a dynamic link to a dog detail page for every dog
          on the server. No matter how big our list of dogs grows, we will
          have a link to a detail page for that dog! */}
        <Switch>
        <Route path="/dogs/:dogName" render={(props)=>
         <ProfilePage dogs={this.state.dogs} {...props} />  
        }/>
        </Switch>
        <div>
          {this.state.beers.map(beer=><p>{beer.name}</p>)}
        </div>
      </div>
    );
  }
}


export default App;

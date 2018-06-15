import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    users: []
  }
  getUsers =()=>{
    axios.get('http://localhost:8080/users')
      .then(res => {
        console.log(res.data)
        this.setState({
          users: res.data
        })
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <button onClick={this.getUsers}>
            Get Users
          </button>
          {this.state.users.map(user => (
              <div>
                <h3>{user.email}</h3>
              </div> 
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;

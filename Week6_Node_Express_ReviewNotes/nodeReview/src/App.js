import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import {Link} from 'react-router';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userID: 0,
      userName: 'Jin',
      users: []
    }
    this.message = this.message.bind(this)
    this.onChange = this.onChange.bind(this)
    this.saveUser = this.saveUser.bind(this)
  }
  message(){
  // Clicking rotating React icon triggers a GET request to server at /users/:userID/:userName
  // Uses `${}` template literals to dynamically set URL with values from this.state.userID etc.
  // Allows us to send user data via GET request, using axios
  // This method is best used when trying to retrieve data, i.e. to request a specific item from a database
    axios.get(`http://localhost:8080/users/${this.state.userID}/${this.state.userName}`)
      .then(res=>{
        console.log(res)
      })
  // *** COMMON ERROR *** : This can be a source of CORS errors. 
  // Make sure you include 'http://' in the URL or you will receive a 
  //   'XMLHttpRequest cannot load ...' error.
  // If your URL includes 'http://' and you still get this error, check your server code.
  }
  onChange(e, field){
  // Change Handler for input fields
  // Uses function arguments and `${}` template literal syntax to set dynamic values in the state
  // I.e. if field="userName", we set the state for userName
  // Allows us to use the same onChange function for multiple inputs
    this.setState({
      [`${field}`]: e.target.value
    })
  }
  saveUser(){
    // Sends current user object to server via Post request
    // Note that axios.post takes two arguments, one for URL and one for data that you are sending
    // bodyParser allows us to access this data on the server side using req.body
    // *** COMMON ERROR *** : axios automatically converts your data to JSON
    // Do not use JSON.stringify() here or the data you receive on the server will not be useable
    let User = {"userID": this.state.userID, "userName": this.state.userName};
    axios.post('http://localhost:8080/user/', User)
      .then(res=>{
        // When we receive a response, we add res.data to our list of Users 
        // This list is displayed on the UserList page/component
        console.log(res)
        this.setState({
            users: this.state.users.concat([res.data])
        })
      })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={this.message} />
          <h2>Welcome to Routing</h2>
        </div>
        {/* Links to change URL and direct React Router to a specific Route
           React Routes take precedence over Node Routes; a '/' endpoint on the server will never get hit
           if there is a '/' endpoint on the front end */}
        <Link to="/">Form</Link>
        <Link to="/list">List</Link>

        {/* This is where children will be rendered in the App, based on the current route
            i.e. if we are at localhost:8080/list, the UserList will be rendered here
            React.cloneElement allows us to swap between different child components, while 
            still passing Props */}
        {React.cloneElement(this.props.children, 
            {userID: this.state.userID, userName: this.state.userName, users: this.state.users,
            onChange: this.onChange, saveUser: this.saveUser})}
      </div>
    );
  }
}

export default App;

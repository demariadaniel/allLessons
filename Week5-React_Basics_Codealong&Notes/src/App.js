import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// In a real app, these global variables would be
// imported from an external JS file, server, or from an API
let color = {color: "red"};
let color1 = {color: "blue"};
let color2 = {color: "purple"};
let color3 = {color: "cyan"};
let color4 = {color: "green"};
let color5 = {color: 'pink'};
let color6 = {color: 'orange'};
let color7 = {color: 'yellow'};
let color8 = {color: 'lightgreen'};
let color9 = {color: 'teal'};
let stdColors = [color, color1, color2, color3, color4];
stdColors.type = "standard";
let brightColors = [color5, color6, color7, color8, color9];
brightColors.type = "bright";

// es6 class constructor syntax
class App extends Component {
  constructor(){
    // constructor is automatically called when a component is FIRST
    // rendered 
    super();
    // super is necessary for 'this' to work properly
    this.state = {
      userLoggedIn: true,
      number: Math.floor(Math.random()*100000),
      colors: stdColors,
      brightColors: brightColors
    }
    // Here we define this.state and the initial values for each key
  }
  clickLogin =()=>{
    // Clicking the 'login' button will trigger this function
    // Always use =()=> in your function definitions to bind 'this' properly
    console.log('Is the user logged in?')
    console.log(this.state.userLoggedIn) 
    // Here we are toggling userLoggedIn between true and false
    // The '!' sets the value to it's oppisite value
    this.setState({
      userLoggedIn : !this.state.userLoggedIn
    })
    // Note that setState is not synchronous, and so these next two lines
    // will not print the expected value
    console.log('Is the user logged in now?')
    console.log(this.state.userLoggedIn)
    // We can pass a callback function as the second argument to 
    // setState if you need code that executes once state has updated!
  }
  changeColors =()=>{
    // More practice changing state by swapping which set of colors
    // is stored under each key
    if (this.state.colors.type === "standard"){
      this.setState({
        colors: brightColors,
        brightColors: stdColors
      })
    } else {
      this.setState({
        colors: stdColors,
        brightColors: brightColors
      })
    }
  }
  render() {
    // Any time this.state changes, React will automatically call
    // render() again. userLoginStyle will be recalculated, and so
    // this.state.userLoggedIn has changed, the backgroundColor will
    // also change
    let userLoginStyle = {backgroundColor : this.state.userLoggedIn ? "dodgerblue" : "black"};
    let myStyle = {fontSize: '20px', color: 'blue', border: '1px solid black'}
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {"React".toUpperCase()}</h1>
        </header>
        <p className="App-intro">
          You are our {this.state.number}th visitor!
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="whiteText">This is our whiteText paragraph </p>
        <p style={myStyle}>This sweet paragraph has my unique style</p>
        <div style={userLoginStyle}>
          {/* Using Props, we can render two ColorLists which 
            display different sets of colors */}
            <ColorList colors={this.state.colors}/>
            <ColorList colors={this.state.brightColors}/>
        </div>
        { /* React event listeners typically use camel case, such as
        onClick, onHover, onSubmit, onChange. We set the appropriate attribute
        equal to a function defined on our component. We can pass these
        functions down to child components if the child needs to make
        an update on the parent, as done here with ChangeColorBtn */}
        <button onClick={this.clickLogin}>Login</button>
        <ChangeColorBtn changeColors={this.changeColors} />
      </div>
    );
  }
}

class ChangeColorBtn extends Component {
  render(){
    // This component receives a function from its parent through props
    return (
      <button onClick={this.props.changeColors}>Change Colors</button>
    )
  }
}

class ColorList extends Component {
  sayColorName =(type)=>{
    console.log(type)
  }
  render(){
    return(
      <ul onClick={()=> this.sayColorName(this.props.colors.type)}>
      { /* If we need to pass an argument in to an event listener 
          function, we write an anonymous function that calls 
          the second function, passing in the argument, as seen here */}
      {this.props.colors.map((color,i)=>
          <li key={i} style={color}>
            This text is {color.color}
          </li>
      )}
      </ul>
    )
  }
}

export default App;
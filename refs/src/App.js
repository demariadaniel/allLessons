import React, { Component } from 'react';
import './App.css';

// Using [] notation allows us to access dynamic key values!
// If we pass in a variable, Javascript will evaluate that
// variable, and use the result as the key name it finds.
// So for example:

// let key;
// let user = {name: 'Dan', age: 31, class: 'Web Dev'}

// key = 'name'
// user[key] === 'Dan'
// key = 'age'
// user[key] === 31
// key = 'class'
// user[key] === 'Web Dev'

// Dot notation, by comparison, will look for the actual key with
// the name you typed, which is why it doesn't work the same.
// So for example:

// user.key   === undefined


// REFS
// Refs are the React equivalent to document.getElementById()
// They allow us to point to a specific DOM element.
// This can be used to grab input values, but is most often used
// for calling native DOM methods like .focus(), .play(), etc.

class App extends Component {

  state = {
    songs: [a,b,c,d],
    currentSong: 0
  }


  lightgreen = React.createRef();
  medgreen = React.createRef();
  darkgreen = React.createRef();
  // ^^^ Here we declare our Refs. This can be done in constructor(),
  // componentWillMount(), or like this, similar to the way we declare 
  // a function. Note that if using this syntax, we do not use the
  // 'this' keyword, but if performing our declarations in the
  // constructor or componentWillMount, we do need to say,
  // this.lightgreen, for example

  focusBox =(ref)=> {
    this[ref].current.focus()
    // This function is targeting a specific ref and focusing that element.
    // The '.current' is required to target the DOM element, for example,
    // this.refName.current
    // We've defined our function to take a 'ref' argument, which allows
    // us to use the same function to target multiple elements, using
    // the square bracket notation trick we talked about above.
    // Just make sure that the value of 'ref' corresponds to one of the
    // variable names you used for your refs ('lightgreen', 'medgreen', etc.)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>

          <audio src={this.props.songs[this.state.currentSong].source} />
          
          <button onClick={this.state.currentSong+1}>Next</button>
          <button onClick={this.state.currentSong-1}>Previous</button>

          {/* Refs have to be associated with a specific DOM element
            so we add a 'ref' attribute to the tag that we want
            a given ref to reference. So div.box.lightgreen corresponds
            to the ref this.lightgreen, div.box.medgreen corresponds to 
            the ref this.medgreen, etc. */}
          <div 
            ref={this.lightgreen}
            tabIndex="0"
            className="box lightgreen">
          </div>
          <div 
            ref={this.medgreen}
            tabIndex="1"  
            className="box medgreen">
          </div>
          <div 
            ref={this.darkgreen}
            tabIndex="2"  
            className="box darkgreen">
          </div>
        
          <div>
            {/* To make our modular 'focusBox' function work, 
              we pass in the name of the ref we want to target as
              a string */}
            <button
              onClick={()=> this.focusBox('lightgreen')}>
              Light
            </button>
            <button
              onClick={()=> this.focusBox('medgreen')}>
              Medium
            </button>
            <button
              onClick={()=> this.focusBox('darkgreen')}>
              Dark
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

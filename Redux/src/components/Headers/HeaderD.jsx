import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';

const mapStateToProps = state => ({clicks: state.clicks})

// mapStateToProps takes specific values from our global State and connects
// them to our component as Props. So whenever ANY part of our App
// updates the State, the component will receive those updates.

// mapStateToProps is written as a function which takes the current 'state'
// and returns an object containing which values you want for Props.
// So here where we've written 'clicks' would be equivalent to this.props.clicks.

const headerD =({clicks})=> (
      <header className="header-D">
        <h1 className="App-title">Redux</h1>
        <h4>Clicked: {clicks} </h4>
      </header>
    )

// Working in Redux, we rarely need to use Classes and can write most
// Components as functional/presentational components. Most of our State
// changes can be extracted to their own separate files. 

// One case where you WOULD use Classes is if you needed component lifecycle
// methods, or wanted to track your own local state (think controlled components
// or like CSS changes, like whether a window is open or not) that the rest
// of the application does not need to use.

const HeaderD = connect(mapStateToProps)(headerD)

// connect is a function which connects our mapStateToProps function and
// our presentational components together. It does the job of connecting
// the Store to the JSX. Notice that it uses currying: a function which
// returns a function, and we execute BOTH functions using two sets of
// parentheses.

export default HeaderD;
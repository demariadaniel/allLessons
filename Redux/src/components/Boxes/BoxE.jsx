import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { addClicks } from '../../actions/addClicks'

// In traditional React, we pass functions which update the parent to
// child components through props. In React-Redux, we pick which actions
// we need to dispatch, and map them as a set of props on to our component.

const mapDispatchToProps = dispatch => {
  return {
    addClicks: clicks =>  dispatch(addClicks(clicks))
  }
}
  // mapDispatchToProps returns an object whose keys all represent functions
  // that update our store. So the key 'addClicks' is equivalent to
  // this.props.addClicks in a standard React app.

  // 'dispatch' represents the function store.dispatch()
  // This allows us to call a function in our React component which then
  // updates (dispatches an action to) our global store
  
  // 'clicks' is the argument we pass from our React component to
  // our addClicks action -- in this case the number of 'clicks' we 
  // want to add to the state

const boxE =({addClicks})=> (
      <div className="box-E">
        <button 
          onClick={()=> addClicks(1)}
          className="box-E_btn">
            Click
        </button>
      </div>
    );

  // Using Redux, our components start to become strictly presentational,
  // and we 'import' the props, functions and state we need.

  // Where we write =({addClicks})=> we are taking the addClicks function
  // from Props which we then connect to our Button on line 30

const BoxE = connect(null, mapDispatchToProps)(boxE)

  // The connect function takes three parameters, in this order:
  //    1) The State we want to map to props
  //    2) The Dispatch functions we want to map to props
  //    3) The Component we want to receive these props
  // If we only have Dispatches but no State to connect, set the first
  // argument to 'null' as we do here.

export default BoxE;
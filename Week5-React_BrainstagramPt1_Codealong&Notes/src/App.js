import React, { Component } from 'react';
import Card from './Card';
import './App.css';

class App extends Component {

  render() {
    // This is the for() loop approach for reference
    // let cardsContainer = [];
    // for (let i = 0; i < cards.length; i++){
    //   cardsContainer.push(
    //     <Card 
    //       title={cards[i].title} 
    //       image={cards[i].imgSrc} />
    //   )
    // }

    // Using .map()
    // .map() takes an array and performs a callback function on each
    // item to produce a new array
    // For example: [ a,b,c,d ] => [ A,B,C,D ]

    // Basic syntax: array.map( (item, i) => { return modifiedItem } ) )

    // Map takes a callback function as an argument. That callback function
    // has an argument (item) to represent each element in the array.
    // This is equivalent to say allItems[i]. You can use any variable name
    // and should choose something representative of your items.
    // i.e. card, user, photo, comment, etc.
    // The callback function must RETURN a modified version of the item
    // and produces a new array with the modified items.
    // Note the second argument i in the callback function is optional.

    return (
      <div className="container">
        <h1>BrainStaGram</h1>
        <div className="row">
          { this.props.cards.map( 
             card => <Card title={card.title} image={card.imgSrc} /> 
          )}
          {/* Take this.props.cards and map each card onto a <Card /> */}
        </div>
      </div>
    );
  }
}
// For the above syntax, know the following:
// First, if an arrow function has only one argument, you do not need ()
// Second, if an arrow function has only one line of code in the body,
// you do not need {}
// Third, if an arrow function has only one line of code in the body, 
// it automatically returns that line.

export default App;
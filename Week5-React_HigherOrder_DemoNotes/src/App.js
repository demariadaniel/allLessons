import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// EXAMPLE OF HOW VALUE OF 'THIS' CHANGES DEPENDING ON EXECUTION CONTEXT

// let MyDog = function(sound){
//   this.sound = sound;
// 	this.bark = function(){
//     console.log(this.sound)
// 	  console.log(this)
//   }
// }


// let Buddy = new MyDog("woof")

// Buddy.bark()

// let HowieBark = Buddy.bark;

// HowieBark()



let OJ = {name: "Orange juice", type: "drink", calories: 50, meal: "breakfast", haveIt: true };
let cheese = {name: "Cheese", type: "dairy", calories: 100, meal: "lunch", haveIt: true  };
let ham = {name: "Ham", type: "meat", calories: 70, meal: "lunch", haveIt: true  };
let croissant = {name: "Croissant", type: "fiber", calories: 200, meal: "lunch", haveIt: true  }
let milk = {name: "Milk", type: "drink", calories: 50, meal: "dessert", haveIt: true  };
let iceCream = {name: "Ice cream", type: "dairy", calories: 200, meal: "dessert", haveIt: true  };
let salad = {name: "Salad", type: "vegetable", calories: 100, meal: "dinner", haveIt: true };
let tofu = {name: "Fried tofu", type: "protein", calories: 100, meal: "dinner", haveIt: true }
let stirFry = {name: "Stirfry veggies", type: "vegetable", calories: 100, meal: "dinner", haveIt: true }
let yogurt = {name: "Yogurt", type: "dairy", calories: 60, meal: "breakfast", haveIt: false  };
let eggs = {name: "Eggs", type: "protein", calories: 90, meal: "breakfast", haveIt: false  };
let appleJuice = {name: "Apple Juice", type: "drink", calories: 50, meal: "lunch", haveIt: false  };


class App extends Component {
  constructor(){
    super();
    this.state = {
        fridge: [OJ, cheese, ham, croissant, milk, iceCream, salad, tofu, stirFry, yogurt, eggs, appleJuice]
    }
  }
  toggleItem(index){
    let newFridge = this.state.fridge;
    newFridge[index].haveIt = !newFridge[index].haveIt
    this.setState({
      fridge: newFridge
    })
  }
  render() {

    // LOOPS INCLUDED FOR COMPARISON

    // let fridgeContents = [];
    // for(let i = 0; i < this.state.fridge.length; i++){
    //   fridgeContents.push(<p>{this.state.fridge[i].name}</p>)
    // }


    // let drinkContents = [];
    // for(let i = 0; i < this.state.fridge.length; i++){
    // if (this.state.fridge[i].type === "drink"){
    //   drinkContents.push(<p>{this.state.fridge[i].name}</p>)
    // }
    // }


    let foodIhave = this.state.fridge.filter(food=>food.haveIt)
    // Work with only those items that I have in the fridge

    return (
      <div className="App">
        <div className="App-header">
          <img src="./Ice-Cream-Free-PNG-Image.png" className="App-logo" alt="logo" />
          <h2>React Higher Order Review</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="box">
          <h2>Fridge Contents</h2>
          {foodIhave.map(food => <p>{food.name}</p>)}
          {/* List all the food names using Map. Map passes every item from the source array 
            into a callback function, then returns a new array with the result of that function.
            One line Arrow functions have an automatic return, and do not require { } around the 
            function body (if it is only one line). In addition, if you only have one argument 
            you do not need () around the arguments. */}
        </div>

        <div className="box">
          <h2>Drink Options</h2>
          {foodIhave.filter(food => food.type==="drink")
                    .map(food => <p>{food.name}</p>)}
          {/* Make a list of only the drinks. .filter() creates a new array that only contains items
          that return 'true' for the callback function you write. Great way to display a specific
          subset of data without modifying the original. */}                    
        </div>

        <div className="box">
          <h2>Meal Calorie Count</h2>
          <h4>Breakfast: 
          {foodIhave.filter(food => food.meal==="breakfast")
                    .map(food => food.calories)
                    .reduce((mealCal, foodCal) => mealCal+foodCal, 0)
          }
          {/* .reduce() condenses your array into a single value. The callback function should
          take two arguments, one for the accumulated result of all values (i.e. mealCal) and 
          one for the current value in the array (foodCal). It also takes an argument for the
          initial value, the 0 in this example. Without this initial value it takes the first
          value of the array, which can be problematic as our array contains objects, and we 
          are adding up numbers.  */}
          </h4>
          <h4>Lunch: 
          {foodIhave.filter(food => food.meal==="lunch")
                    .map(food => food.calories)
                    .reduce((mealCal, foodCal) => mealCal+foodCal, 0)
          }
          </h4>
          <h4>Dinner: 
          {foodIhave.filter(food => food.meal==="dinner")
                    .map(food => food.calories)
                    .reduce((mealCal, foodCal) => mealCal+foodCal, 0)
          }
          </h4>
        </div>

        <GroceryList fridge={this.state.fridge} toggleItem={(food)=>this.toggleItem(food)}/>
      </div>
    );
  }
}



class GroceryList extends Component {
    constructor(props){
      super(props);
      // Any time we want to access props in the constructor we need to pass it as an argument
      // as done here.
      this.state = {
        list : this.props.fridge
      }      
      //this.toggleItem = this.toggleItem.bind(this)
      // If we use arrow functions on event handlers, we do not need to bind the function, as 
      // arrow functions do not bind 'this' to a new context.
    }
    componentWillReceiveProps(nextProps){
        this.setState({
          fridge: nextProps.fridge
        })
        // If your state depends on the props you receive, you will need to update the state
        // when your props change. A lifecycle method is an ideal way to handle this. In this 
        // example our component could easily be written using only props, but this illustrates 
        // how to handle connecting state and props should you need to.
    }
    toggleItem(index){
      this.props.toggleItem(index)
    }
    render(){
      console.log(this.state.list)
      return(
        <div className="grocery">
          <h2>Grocery List</h2>
          {this.state.list.map((food, index)=>
            <button className={"btn " + (food.haveIt ? "btn-primary" : "btn-default")}
                    key={index}
                    onClick={()=>this.toggleItem(index)}>
              {food.name}
            </button>
            )}
        </div>
      )
    }
}

export default App;

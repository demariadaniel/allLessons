import React, { Component } from "react";
import { Switch, Route, Link } from "react-router";
import Shop from "./components/Shop";
import Splash from './components/Splash';
import { Logo } from "./components/Logo";
import "./styles/App.css";
import {HTML, colorB, colorE, colorG} from './utils/colors';
    

class App extends Component {
  state = {
    colors: [colorB(), colorE(), colorG()]
  }
  changeTheme =(index)=>{
    this.setState({
      currentTheme: index,
      colors: [colorB(), colorE(), colorG()]
    })
  }
  componentWillMount(){
    // axios.get('/products')
  }
  render() {
    console.log(colorB(), colorE(), colorG())
    const {colors} = this.state;
    return (
      <div className="App">
        <div className="logos--container">
          <Logo className="App-logo-A" fill={colors[0]} />
          <Logo className="App-logo-B" fill={colors[1]} />
          <Logo className="App-logo-C" fill={colors[2]} />
        </div>
          <h1 className="App-title">
            Welcome to the Shop
          </h1>
          <h1 className="App-title--white">
            Welcome to the Shop
          </h1>
          <h2 className="App-title--subtitle">
            Your one stop for everything you need
          </h2>
        <div>
          <Switch>
            <Route 
              exact
              path="/"
              render={()=>(<Splash />)}
            />
            <Route
              path="/shop"
              render={routeProps => 
                <Shop 
                  {...routeProps} 
                  changeTheme={(index)=> this.changeTheme(index)} 
                  />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}


export default App;

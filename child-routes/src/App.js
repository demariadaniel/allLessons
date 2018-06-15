import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import About from './components/About';

import {BrowserRouter as Router} from 'react-router-dom';
import {Switch, Route, Link} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <h1>My Site</h1>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                </Switch>
            </div>
        );
    }
}

export default App;

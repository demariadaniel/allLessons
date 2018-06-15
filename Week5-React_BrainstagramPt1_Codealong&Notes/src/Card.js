import React, { Component } from "react";

// Create-react-app allows us to define our state very simply
// We set an initial value for clicks to be 0
class Card extends Component {
  state = {
    clicks: 0
  }
  sayTitle = () => {
    // This function will change the clicks to the NEXT value for this.state.clicks
    // We are saying, this.state.clicks now equals the current value of
    // this.state.clicks + 1
    this.setState({
      clicks: this.state.clicks+1
    })
    // Note that if we had many other state values we only need to include
    // those values which we want to change in our setState({})
  }
  render() {
    // Here we define a string to represent classNames
    // If the value of state.clicks goes above 20, we use both
    // the "card" and "gold" classNames, otherwise we just use "card"
    // We use this variable on a div to dynamically change it's appearance
    // so that any Card w/ over 20 likes appears gold
    // Each Card has its own state so only some cards will be gold!
    let likeStatus = this.state.clicks > 20 ? "card gold" : "card";
    return (
      <div 
        className="col s4"
        onClick={this.sayTitle}>
        {/* Clicking this div executes the sayTitle function */}
        <div className={likeStatus}>
        {/* ClassName determined dynamically */}
          <div className="card-image">
            <img src={this.props.image} />
            {/* img src supplied through props */}
            <span className="card-title">{this.props.title}</span>
            {/* The value supplied to us through this.props will be
                outputted here, i.e. the text in the span and the
                src of the image tag. Whatever key follows this.props 
                must match a key we use in our parent component */}
          </div>
          <div className="card-content">
            <p>
              Powering the next generation of creators. Build your skills in
              business, design &amp; technology.
            </p>
            <p>
              <em>Likes: </em> {this.state.clicks} 
              {/* Displays the value of clicks in state. Every time
                state changes, render() is triggered automatically,
                so this value updates every time we click.   */}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

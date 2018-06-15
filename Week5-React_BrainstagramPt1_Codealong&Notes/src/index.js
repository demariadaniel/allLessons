import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Here we are defining two different arrays of card images.
// We pass one array into <App> through props (line 53). We can
// easily swap which array gets rendered on the screen by changing
// the variable name passed into props.

const cardsA = [
  {
    imgSrc: 'images/square1.jpg',
    title: 'Card 1'
  }, {
    imgSrc: 'images/square2.jpg',
    title: 'Card 2'
  }, {
    imgSrc: 'images/square3.jpg',
    title: 'Card 3'
  }, {
    imgSrc: 'images/square4.jpg',
    title: 'Card 4'
  }, {
    imgSrc: 'images/square5.jpg',
    title: 'Card 5'
  }, {
    imgSrc: 'images/square6.jpg',
    title: 'Card 6'
  }
]

const cardsB = [{
  imgSrc: 'https://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg',
  title: 'Card 1'
}, {
  imgSrc: 'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi',
  title: 'Card 2'
}, {
  imgSrc: 'http://www.cdc.gov/features/dog-bite-prevention/dog-bite-prevention_456px.jpg',
  title: 'Card 3'
}, {
  imgSrc: 'https://s-media-cache-ak0.pinimg.com/736x/63/0f/0e/630f0ef3f6f3126ca11f19f4a9b85243.jpg',
  title: 'Card 4'
}, {
  imgSrc: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  title: 'Card 5'
}, {
  imgSrc: 'https://i.ytimg.com/vi/Qnf_1laqE9I/maxresdefault.jpg',
  title: 'Card 6'
}]

// Pass array of images to App via props
ReactDOM.render(<App cards={cardsA} />, 
  document.getElementById('root'));
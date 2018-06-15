import React, { Component } from "react";
import {HTML, theme1, theme2, theme3} from './../utils/colors';

class Themes extends Component {
  state = {
    themes: [theme1, theme2, theme3],
    currentTheme: 0
  }
  chooseTheme =(e)=>{
    let index = parseInt(e.target.value);
    let HTML = document.getElementsByTagName('html')[0]
    let newThemeColors = this.state.themes[index].colors
    for (let color of Object.keys(newThemeColors)){
      HTML.style.setProperty(color, newThemeColors[color])
    }
    this.setState({
      currentTheme: index
    })
    this.props.changeTheme(index)
  }
  render(){
    return(
      <div className={`theme windows--neon left`}>
        <h3 className="text--color1">
          Theme
        </h3>
        <select
          value={this.state.currentTheme}
          onChange={this.chooseTheme}>
          {this.state.themes.map((theme, i) =>(
            <option value={i}>
              {theme.name}
            </option>
            ))
          }
        </select>
      </div>
      )
    }
}

export default Themes;
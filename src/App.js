import React, { Component, Fragment } from 'react';
import './App.css';
import About from './About.js';
import Portfolio from './Portfolio.js';
import Home from './Home.js';
import SnowStorm from 'react-snowstorm';
import StarfieldAnimation from 'react-starfield-animation';

let skillStyle = {
  fontWeight: "bold",
  // backgroundColor: 'green'
}

let skills = {

}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        currentView: "home",
    };

}


  handleClickAbout(){
    this.setState({currentView: "about"});
  }

  handleClickPortfolio(){

    this.setState({currentView: "portfolio"});
  }

  handleClickHome(){

    this.setState({currentView: "home"});
  }


  render() {
    return (
      <Fragment>
      <div class="row" id="navbar-container">
        <div class="nav">
          <div id="thomas-nav" onClick={() => this.handleClickHome()}>Home</div>
          <div id="divide"> | </div>
          <div id="about" onClick={() => this.handleClickAbout()}>About</div>
          <div id="divide"> | </div>
          <div id="projects" onClick={() => this.handleClickPortfolio()}>Portfolio</div>
        </div>
      </div>
              <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '95%',
          height: '95%'
        }}
      />
      <div class="spaceStyle">
      <div class="row">
        <div class="col-md-12 main-container">
        {this.state.currentView == 'home' ? <Home /> : null }
        {this.state.currentView == 'about' ? <About clickFunction={()=> this.handleClickPortfolio()} /> : null}
        {this.state.currentView == 'portfolio' ? <Portfolio /> : null }
        {() => {
          
        }}
        {/* <Portfolio /> */}
        </div>
      </div>
      </div>

      {/* <SnowStorm useMeltEffect={false} usePositionFixed={true} followMouse={false} flakesMaxActive={32}/> */}
      </Fragment>
  )}
}

export default App;

import React, { Component, Fragment } from 'react';
import './App.css';
import About from './About.js'

let skillStyle = {
  fontWeight: "bold",
  // backgroundColor: 'green'
}

let skills = {

}

class App extends Component {

  state = {
    currentView: "about"
  }


  render() {
    return (
      <Fragment>
      <div class="row">
        <div class="nav">
          <div id="about">About</div>
          <div id="divide"> | </div>
          <div id="projects">Projects</div>
        </div>
      </div>
      <div class="spaceStyle">
      <div class="row">
        <div class="col-md-12 main-container">
        <About />
        </div>
      </div>
      </div>
      </Fragment>
  )}
}

export default App;

{/* <div class="intro">Hello, I'm Thomas!</div>
		<div class="tagline">Full Stack Developer | Designer | Musican | Human Being</div>
		<div class="icons-social">
			<a target="_blank" href="https://github.com/thomgardiner"><i class="fab fa-github"></i></a>
			<a target="_blank" href="https://stackoverflow.com/story/thomgardiner"><i class="fab fa-stack-overflow"></i></a>
			<a target="_blank" href="https://www.linkedin.com/in/thomas-gardiner-a824699/"><i class="fab fa-linkedin"></i></a>
    </div> */}
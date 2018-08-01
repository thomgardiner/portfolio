import React, { Component, Fragment } from 'react';
import './App.css';

let skillStyle = {
  fontWeight: "bold",
  // backgroundColor: 'green'
}

let skills = {

}

class App extends Component {
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
          <div class="row">
            <div class="intro">Hello, I'm Thomas.</div>
          </div>
          <div class="row">
            <div class="tagline"> Full Stack Developer | Designer | Musician | Human </div>
          </div>
          <div class="row">
            <div class="icons-social">
            </div>
          </div>
          <div class="row">
            <div class="about"> My name is Thomas Gardiner. I'm a Full Stack Developer with a background and eye for art and design. I like to build cool stuff, and also things too.</div>
            <div class="row">
            <div class="about-skills"><span style={skillStyle}> Skills and Languages:</span> <p style={skills}> Javascript | Node.js | React.js | MongoDB | MySQL | HTML5 | CSS3 </p> </div>
            <div class="about-skills"><span style={skillStyle}> Software:</span> <p style={skills}> 3DS Max, Maya, After Effects, Photoshop, Office, Jira </p> </div>
            </div>
          </div>
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
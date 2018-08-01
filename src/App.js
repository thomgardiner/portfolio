import React, { Component, Fragment } from 'react';
import './App.css';

let spaceStyle = {
  backgroundImage: "url",
  // backgroundColor: 'green'
}

class App extends Component {
  render() {
    return (
      <Fragment>
      <div class="row">
        <div class="nav">
          <div id="about">About</div>
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
            <div class="about"> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </div>
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
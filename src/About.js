import React, { Component, Fragment } from 'react';
import './App.css';

let skillStyle = {
    fontWeight: "bold",
    // backgroundColor: 'green'
  }
  
  let skills = {
  
  }

class About extends Component {

    render(){
        return(
            <Fragment>
            <div class="row">
            <div class="intro">Hello, I'm Thomas.</div>
          </div>
          <div class="row">
            <div class="tagline"> Full Stack Developer | Designer | Musician | Human </div>
          </div>
          <div class="row">
            <div class="icons-social">
              <a target="_blank" href="https://github.com/thomgardiner"> Github </a>
              <a target="_blank" href="https://www.linkedin.com/in/thomas-gardiner-a824699"> LinkedIn </a>
              <a target="_blank" href="https://stackoverflow.com/users/10166761/thomgardiner?tab=profile"> Stack Overflow </a>
              <a target="_blank" href="https://www.codewars.com/users/Thomgardiner"> Code Wars </a>
            </div>
          </div>
          <div class="row">
            <div class="about"> My name is Thomas Gardiner. I'm a Full Stack Developer with a background in, and eye for, art and design. I like to build cool stuff, and also things too.</div>
            <div class="row">
            <div class="about-skills"><span style={skillStyle}> Skills and Languages:</span> <p style={skills}> Javascript | Node | React | MongoDB | MySQL | HTML5 | CSS3 | Responsive Design</p> </div>
            <div class="about-skills"><span style={skillStyle}> Software:</span> <p style={skills}> 3DS Max, Maya, After Effects, Photoshop, Office, Jira </p> </div>
            </div>
          </div>
          </Fragment>
        )
    }

}

export default About;
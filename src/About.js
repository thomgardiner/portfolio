import React, { Component, Fragment } from 'react';
import './App.css';
import './About.css';

let skillStyle = {
    fontWeight: "bold",
    // backgroundColor: 'green'
  }
  
  let skills = {
  
  }

class About extends Component {

  constructor(props) {
    super(props);
  }

    render(){
        return(
            <Fragment>
          <div class="row">
          <div id="image-container">
          <img id="image" src="./thomas.jpeg"></img>
          </div>
          </div>
          <div class="row" id="about-container">
          <div id="link-container">           
            <div class="about"> <a class="link" target="_blank" href="https://github.com/thomgardiner">Github</a> <a class="link" target="_blank" href="https://www.linkedin.com/in/thomas-gardiner-a824699">LinkedIn</a><a class="link" target="_blank" href="mailto:thomgardiner@gmail.com">Email</a></div>
          </div>

            <div class="about"> My name is <span id="thomasg"> Thomas Gardiner</span>. I'm a Full Stack Developer with a background in design and animation. I like to <span id="build" onClick={() => this.props.clickFunction()} >build stuff</span> and learn new things. I have over two years of self taught experience and I recently completed a bootcamp through the University of Denver. Before that, I worked at Microsoft on the Bings Map 3D App as a contract 3D Artist. I make and play music in my freetime, and travel as much as I can. I'm most comfortable in the MERN stack (MongoDB, Express, React, Node.js), but I have an aptitude for picking up new technologies, frameworks and languages. Let's build something cool! </div>

            <div id="about-skills-container">
            <div class="about-skills"><span style={skillStyle}> Skills and Languages:</span> <p style={skills}> <span id="javascript"> Javascript </span> | <span id="node">Node.js </span> | <span id="react"> React.js </span> |<span id="mongo"> MongoDB </span> | <span id="mysql"> MySQL </span> | <span id="html"> HTML </span> | <span id="css"> CSS </span> | <span id="restful">Restful APIs </span> | <span id="response"> Responsive Design </span> | <span id="threed"> 3D Modeling </span> | <span id="mogo"> Motion Graphics </span> </p> </div>
            <div class="about-skills"><span style={skillStyle}> Software:</span> <p style={skills}> <span id="javascript"> 3DS Max </span> | <span class="skill"> Maya </span> | <span class="skill"> After Effects </span> | <span class="skill"> Photoshop </span> | <span class="skill"> Office </span> | <span class="skill"> Jira </span> </p> </div>
            </div>
            </div>


          </Fragment>
        )
    }

}

export default About;
import React, { Component, Fragment } from 'react';
import './App.css';
import './About.css';

let skillStyle = {
    fontWeight: "bold",
    // backgroundColor: 'green'
  }
  
  let skills = {
  
  }

class Home extends Component {

  constructor(props) {
    super(props);
  }

    render(){
        return(
            <Fragment>
        <div id="intro-container">
            <div class="row">
            <div class="intro">Hello, I'm <span id="thomas">Thomas</span>.</div>
          </div>
          <div class="row">
            <div class="tagline"> <span id="fullstack"> Full Stack Developer </span> | <span id="designer"> Designer </span> | <span id="musician"> Musician </span> | <span id="human"> Human </span> </div>
          </div>
          <div class="row">
            <div class="icons-social">
              <a target="_blank" href="https://github.com/thomgardiner"> <i class="fab fa-github"></i> </a>
              <a target="_blank" href="https://www.linkedin.com/in/thomas-gardiner-a824699"> <i class="fab fa-linkedin"></i></a>
              <a target="_blank" href="https://stackoverflow.com/users/10166761/thomgardiner?tab=profile"> <i class="fab fa-stack-overflow"></i></a>
              <a target="_blank" href="mailto:thomgardiner@gmail.com"> <i class="far fa-envelope"></i> </a>
            </div>
          </div>
        </div>
          </Fragment>
        )
    }

}

export default Home;
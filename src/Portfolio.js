import React, { Component, Fragment } from 'react';
import './App.css';
import './About.css';
import './Port.css';

class Portfolio extends Component {

    render(){
        return(
        <Fragment>
            <div class="row">
            <div class="project-intro">Here are some things I've built. Check my github for more!</div>
            </div>
            <div class="row">
                <div class="port-container">
                    <div class="port-item" id="1">
                        <p class="project-title"> Step Sequencer </p>
                        <a target="_blank" href="https://warm-shore-77918.herokuapp.com/"><img class="port-img" src='../synth.png'></img></a>
                        <p class="project-about">Create musical loops out of drum samples and synths!</p>
                        <p class="project-madewith"><span class="made-with">Made with:</span></p>
                        <p class="project-madewith-info">JS, React, Tone.js, Node.js</p>
                        <p class="project-github"><a target="_blank" href="https://github.com/thomgardiner/DAW">Github</a></p>
                    </div>
                    <div class="port-item" id="2">
                        <p class="project-title" id="benkyo"> Benkyo! </p>
                        <a target="_blank" href="https://fierce-dawn-43074.herokuapp.com/"><img class="port-img" src='../benkyou.png'></img></a>
                        <p class="project-about">A full stack flashcard app where you can create and study decks!</p>
                        <p class="project-madewith"><span class="made-with">Made with:</span></p>
                        <p class="project-madewith-info">JS, JQuery, MongoDB, Node.js</p>
                        <p class="project-github"><a target="_blank" href="https://github.com/thomgardiner/benkyou">Github</a></p>
                    </div>
                    <div class="port-item" id="3">
                        <p class="project-title" id="filter-app"> Filter App </p>
                        <a target="_blank" href="https://thomgardiner.github.io/filter-app/"><img class="port-img" src='../animeeyes.png'></img></a>
                        <p class="project-about">Automatically places funny props on user submitted images!</p>
                        <p class="project-madewith"><span class="made-with">Made with:</span></p>
                        <p class="project-madewith-info">JS, JQuery, Node.js, Kairos API</p>
                        <p class="project-github"><a target="_blank" href="https://github.com/thomgardiner/filter-app">Github</a></p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="port-container-2">
                    <div class="port-item" id="4">
                        <p class="project-title" id="gif-app"> GIF Search App </p>
                        <a target="_blank" href="https://thomgardiner.github.io/gif-app/"><img class="port-img" src='../gif-app.png'></img></a>
                        <p class="project-about">Search and play through a library of GIFs with the GIPHY API! </p>
                        <p class="project-madewith"><span class="made-with">Made with:</span></p>
                        <p class="project-madewith-info">JS, JQuery, GIPHY API</p>
                        <p class="project-github"><a target="_blank" href="https://github.com/thomgardiner/gif-app">Github</a></p>
                    </div>
                    <div class="port-item" id="5">
                        <p class="project-title" id="quiz-app"> Quiz App </p>
                        <a target="_blank" href="https://thomgardiner.github.io/quiz-app/"><img class="port-img" src='../quizapp.png'></img></a>
                        <p class="project-about">A simple quiz app about a handful of country capitals!</p>
                        <p class="project-madewith"><span class="made-with">Made with:</span></p>
                        <p class="project-madewith-info">JS, JQuery</p>
                        <p class="project-github"><a target="_blank" href="https://github.com/thomgardiner/quiz-app">Github</a></p>
                    </div>
                </div>
            </div>
        </Fragment>
        )
    }

}

export default Portfolio;
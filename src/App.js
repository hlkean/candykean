
import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Particles from 'react-particles-js';

class App extends Component{
  
  render(){
    const particleConfig = { 
      particles: { 
        number: { 
          value: 200, 
          density: { 
            enable: true, 
            value_area: 1000, 
          } 
        }, 
        size: {
          value: 8,
          random: true,
          anim: {
            enable: false,
            speed: 80,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: false              
        },
        move: {
          enable: true,
          direction: "bottom-right",
          out_mode: "out"
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: true,
            mode: "bubble"
          },
          resize: true
        },
        modes: {  
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 0.8,
            speed: 1
          },
          repulse: {
            distance: 100,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    }
    return(
      <div className="App" style={{background: '#56a6ef'}}>
        <h1>Welcome to your yearly Candy Kean!</h1>
        <Particles 
        style={{position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh"}}
        params={particleConfig} 
      /> 
      </div>
    );
  }
}

export default hot(module)(App);
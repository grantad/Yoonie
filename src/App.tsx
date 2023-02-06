import React from 'react';
import Navbar from './AppNavbar';
import Carousel from './Carousel';
import { Button, Nav } from 'reactstrap';
//import { Navbar } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Mission from './Mission';
import Coaching from './Coaching';
import Events from './Events';
import Resources from './Resources';
import Success from './Success';
import Vision from './Vision';

import { Routes } from 'react-router-dom';
import  Grid  from './AppGrid';
import AppGrid from './AppGrid';
import ServiceWork from './feeding';
import About from './About';
import GetInvolved from './GetInvolved';
import Goals from './Goals';


const items = [
  {
    src: 'https://via.placeholder.com/900x500',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://via.placeholder.com/900x500',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://via.placeholder.com/900x500',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
];

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Carousel items={items} />
      break
    case "/coaching":
      component = <Coaching />
      break
    case "/mission":
      component = <Mission />
      break
    case "/events":
      component = <Events />
      break
    case "/resources":
      component = <Resources />
      break
    case "/about":
      component = <About />
      break
    case "/getInvolved":
      component = <GetInvolved />
      break
    case "/goals":
      component = <Goals />
      break
    case "/vision":
      component = <Vision />
      break
    case "/success":
      component = <Success />
      break
  }

  return (
    <>
      <Navbar />
      
      {component}
      <div>
      <AppGrid />
      </div>
      <div>
        <ServiceWork />
      </div>
      
      </>
  )
}

export default App

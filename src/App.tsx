import React from 'react';
import ReactDom from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import Navbar from './AppNavbar';
import Carousel from './Carousel';
import { Button, Nav } from 'reactstrap';
//import { Navbar } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Mission from './Mission';
import Coaching from './Coaching';
import Events from './Events';
import Resources from './Resources';
import Success from './Success';
import Vision from './Vision';
import Multi from './multiple';


import  Grid  from './AppGrid';
import AppGrid from './AppGrid';
import ServiceWork from './feeding';
import About from './About';
import GetInvolved from './GetInvolved';
import Goals from './Goals';

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from 'react-bootstrap';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';
//Pictures
import peach from './images/peachtree.jpg';
import getInv2 from './images/Get-involved-2.png.jpg'
import getInv3 from './images/Get-involved-3.png.jpg'
import meditate from './images/Coaching.png'
import ReactDOM from 'react-dom';






const items = [
  {
    src: require('./iStock-lil-girl.jpeg'),
    altText: 'Slide 1',
    caption: 'be a kid'
  },
  {
    src: require('./iStock-black-woman-daughter.jpeg'),
    altText: 'Slide 2',
    caption: 'Spend time with kids'
  },
  {
    src: require('./iStock-woman-eating.jpeg'),
    altText: 'Slide 3',
    caption: 'Enjoy'
  },
];

export default function App() {
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
    <BrowserRouter>
    <>
      <Navbar />
    <Routes>
      <Route path="/" element={<Carousel items={items}/> } />
      <Route path="/about" element={<About />} />
      <Route path="/getInvolved" element={<GetInvolved />} />
      <Route path="/goals" element={<Goals />} />
      <Route path="/vision" element={<Vision />} />
      <Route path="/success" element={<Success />} />

</Routes>
      
      
      <div>
      <Card className='text-center bg-secondary text-white my-5 py-4'>
  <Card.Body>This call to action card is a great place to showcase some
     important information or display a clever tagline!.
     </Card.Body>
</Card>
      </div>
      <div>
        <ServiceWork />
      </div>
      <div>
     
      

      </div>

      <Row>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={peach} />
  <Card.Body>
    <Card.Title>Peachtree Road:</Card.Title>
    <Card.Text>
      To promote better health by participating in the annual Peachtree road race as a group!
      Group excercises like biking, hiking, kayaking, walking, etc...
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={meditate} />
  <Card.Body>
    <Card.Title>Coaching</Card.Title>
    <Card.Text>
      My passion is my soul mission; 
    </Card.Text>
    <Button variant="primary">Learn More!</Button>
  </Card.Body>
</Card>
    
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={getInv3} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Learn More</Button>
  </Card.Body>
</Card>
    
    </Col>
  </Row>

      <img
      src='./iStock-heart.eps'
      className='img-fluid hover-shadow rounded-4'
      alt=''
    />
     
     <img
      src='https://mdbootstrap.com/img/new/standard/city/041.webp'
      className='img-fluid hover-shadow rounded-4'
      alt=''
    />

    
    
      
      </>
      </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(<App />);

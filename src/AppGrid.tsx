import React from 'react';
import { Row, Col } from 'reactstrap';

const AppGrid = () => {
  return (
    <Row>
      <Col xs={6}>
        <img src='https://cdnwp.tonyrobbins.com/wp-content/uploads/2014/04/1-membershipprogram-1.jpg' alt="Image 1" />
      </Col>
      <Col xs={6}>
        <img src="https://cdnwp.tonyrobbins.com/wp-content/uploads/2014/04/1-membershipprogram-1.jpg" alt="Image 2" />
      </Col>
      <Col xs={6}>
        <img src="https://cdnwp.tonyrobbins.com/wp-content/uploads/2014/04/1-membershipprogram-1.jpg" alt="Image 3" />
      </Col>
      <Col xs={6}>
        <img src="https://cdnwp.tonyrobbins.com/wp-content/uploads/2014/04/1-membershipprogram-1.jpg" alt="Image 4" />
      </Col>
    </Row>
  );
};

export default AppGrid;

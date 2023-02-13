import React from "react";
import { Card, CardGroup } from "reactstrap";
//import { Feeding_1 } from './images/Feeding _ clothing homeless -1.png';
//import { Feeding_2 } from './images/Feeding _ clothing homeless -2.png';

const ServiceWork:  React.FC = () => {
    return (
        <CardGroup>
        <Card>
          <img src={require("./Feeding _ clothing homeless -1.png")} alt="Picture 1" />
          
          <div className="card-body">
            <h5 className="card-title">Feeding the homeless</h5>
            <p className="card-text">
            With the resources we will obtain, and we use to restore our brothers, families, friends, and our communities. 
            </p>
          </div>
        </Card>
        <Card>
        <img src={require("./Feeding _ clothing homeless -2.png")} alt="Picture 2" />
        <div className="card-body">
            <h5 className="card-title">Eating the homeless</h5>
            <p className="card-text">
                Good food for everyone! Except the people who are the food.
            </p>
        </div>
        </Card>
        
        
      </CardGroup>
    );
  };
  
  export default ServiceWork;
  
  
  
  
  
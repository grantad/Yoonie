import React, { useState } from 'react';
import { MDBCollapse, MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function App() {
  const [showFirstElement, setShowFirstElement] = useState(false);
  const [showSecondElement, setShowSecondElement] = useState(false);

  const toggleFirstElement = () => setShowFirstElement(!showFirstElement);
  const toggleSecondElement = () => setShowSecondElement(!showSecondElement);

  const toggleBothElements = () => {
    setShowFirstElement(!showFirstElement);
    setShowSecondElement(!showSecondElement);
  };
  return (
    <>
      <MDBBtn onClick={toggleFirstElement}> Toggle first element</MDBBtn>
      <MDBBtn onClick={toggleSecondElement}>Toggle second element</MDBBtn>
      <MDBBtn onClick={toggleBothElements}> Toggle both elements</MDBBtn>

      <MDBRow>
        <MDBCol>
          <MDBCollapse show={showFirstElement} className='mt-3'>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil
            anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </MDBCollapse>
        </MDBCol>
        <MDBCol>
          <MDBCollapse show={showSecondElement} className='mt-3'>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil
            anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </MDBCollapse>
        </MDBCol>
      </MDBRow>
    </>
  );
}
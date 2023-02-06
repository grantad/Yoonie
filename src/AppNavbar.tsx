import React from 'react';
import { 
    Navbar,
     NavbarBrand,
      Nav,
       NavItem,
        NavLink,
    Collapse,
    NavbarToggler,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const AppNavbar = () => {
  return (
    
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">Yonnie Yael</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
    
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Mission
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem href='/about'>About Yoonie Yael</DropdownItem>
                <DropdownItem href='/getInvolved'>Get Involved</DropdownItem>
                <DropdownItem href='/goals'>Goals</DropdownItem>
                <DropdownItem href='/vision'>Vision</DropdownItem>
                <DropdownItem href='/success'>Success Stories</DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem>
            <NavLink href='/coaching'>Coaching</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href='/events'>Events</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href='/resources'>Resources</NavLink>
        </NavItem>
      </Nav>

      
    </Navbar>

    
  );

}

export default AppNavbar;

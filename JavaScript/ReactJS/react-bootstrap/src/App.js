import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import { Fragment } from 'react';
import {
  Navbar, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';


class App extends Component {
  
  render(){
    return(
      <Fragment> 
      <div className="container">
        <div className="row">
           <div className="col-md-6">
            <Navbar color="faded" light expand="md">
              <NavbarBrand href="/">
                React Bootstrap Example
              </NavbarBrand>
              <Nav className="ml-auto" navbar>

                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-bold" href="/">Home</NavLink>
                </NavItem>
                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-bold" href="https://www.techiediaries.com/react-bootstrap">
                    Tutorial
                  </NavLink>
                </NavItem>
              </Nav>
              </Navbar>
           </div>
           <div className="col-md-6">
            <Navbar color="faded" light expand="md">
              <NavbarBrand href="/">
                React Bootstrap Example
              </NavbarBrand>
              <Nav className="ml-auto" navbar>

                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-bold" href="/">Home</NavLink>
                </NavItem>
                <NavItem className="d-flex align-items-center">
                  <NavLink className="font-weight-bold" href="https://www.techiediaries.com/react-bootstrap">
                    Tutorial
                  </NavLink>
                </NavItem>
              </Nav>
              </Navbar>
           </div>
        </div>
      </div>
      </Fragment>
        
      
    )  
  }
  
}

export default App;

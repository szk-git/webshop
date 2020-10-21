import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button } from 'react-bootstrap';

class Header extends Component{
    render(){
        return(
          <>
            <Navbar fixed="top" collapseOnSelect expand="xl" bg="dark" variant="dark">
              <Navbar.Brand href="/">Webshop by Kristof</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              { this.props.authenticated ? (
                <Nav>
                  <Nav.Link href="/">Profile</Nav.Link>
                  <Button variant="light" onClick={this.props.onLogout}>Logout</Button>
                </Nav>
              ): (
                <Nav>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="#pricing">Signup</Nav.Link>
                </Nav>
              )}
              </Navbar.Collapse>
            </Navbar>
          </>
        );
    }
}

export default Header;

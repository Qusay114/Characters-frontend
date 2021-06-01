import React, { Component } from 'react';
import {Navbar , Nav} from 'react-bootstrap';

export class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant='dark' expand="lg">
  <Navbar.Brand href="#home">Characters</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" style={{marginLeft:'20rem'}}>
    <Nav.Link href='/'>
        Home
      </Nav.Link>
      <Nav.Link href='/favorite' style={{marginLeft:'5rem'}} >
        Favorite
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </>
    )
  }
}

export default Header;

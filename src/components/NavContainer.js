import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const navbarInstance = (
    <Navbar inverse>
      <Navbar.Header>
      <Navbar.Brand><Link to='/'>Crawler-Practice</Link></Navbar.Brand>
      </Navbar.Header>
      <Nav>
      <LinkContainer to='/about'><NavItem eventKey={1}>About</NavItem></LinkContainer>
        <NavDropdown eventKey={2} title="Crawler" id="basic-nav-dropdown">
          <LinkContainer to='/music'><MenuItem eventKey={2.1}>Music</MenuItem></LinkContainer>
          <LinkContainer to='/beauty'><MenuItem eventKey={2.4}>Beauty</MenuItem></LinkContainer>
          <LinkContainer to='/weather'><MenuItem eventKey={2.2}>Weather</MenuItem></LinkContainer>
        </NavDropdown>
      </Nav>
    </Navbar>
);
  
export class NavContainer extends React.Component {
    render() {
        return (
            <div>{navbarInstance}</div>
        );
    }
}
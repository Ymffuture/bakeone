import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaHome, FaUtensils } from 'react-icons/fa'; // Example icons, you can replace with your own
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

export default function ShowNavbar() {
  return (
    <Navbar className='navbar-color' bg="dark" variant="dark" expand="lg" sticky="buttom" style={{fontSize: '24px'}}>
      <Container>
        <Navbar.Brand className='ft-dm' as={Link} to="/" style={{ marginRight: '280px' }}>
          <FaUtensils style={{ marginLeft: '-5px' }} />SDB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='top' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className='link'>
              <FaHome style={{ marginRight: '5px' }} className='link-w' /> Home
            </Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Appetizers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Main Courses</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Desserts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/MenuPage">All Menu</NavDropdown.Item> {/* Use Link to navigate to MenuPage */}
            </NavDropdown>
            <Nav.Link as={Link} to="/Recipe" className='link'>Recipe </Nav.Link> {/* Example of navigating to RecipePage */}
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/AboutPage">About</Nav.Link> {/* Example of navigating to AboutPage */}
            <Nav.Link as={Link} to="/ContactPage">Contact</Nav.Link> {/* Example of navigating to ContactPage */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

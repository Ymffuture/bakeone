import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaHome} from 'react-icons/fa'; // Example icons, you can replace with your own
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

export default function ShowNavbar() {
  return (
    <Navbar className='navbar-color' bg="dark" variant="dark" expand="lg" sticky="bottom" style={{fontSize: '24px'}}>
    <Container>
      <Navbar.Brand className='ft-dm' as={Link} to="/">
      <div className='logo'>
      <img src='/img/Logo M.png' alt='Logo'/>
      </div>
      <span>B</span>ake<span>O</span>ne
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='top' />
      <Navbar.Collapse id="basic-navbar-nav" className="center-navbar">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" className='link'>
            <FaHome style={{ marginRight: '5px' }} className='link-w' /> Home
          </Nav.Link>
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <NavDropdown.Item href="/NotFoundPage">Appetizers</NavDropdown.Item>
            <NavDropdown.Item href="/NotFoundPage">Main Courses</NavDropdown.Item>
            <NavDropdown.Item href="/NotFoundPage">Desserts</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/MenuPage">All Menu</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/Recipe" className='link'>Recipe</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/AboutPage">About Us</Nav.Link>
          <Nav.Link as={Link} to="/ContactPage">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  );
}

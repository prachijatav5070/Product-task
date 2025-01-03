import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home"> Product Management systme </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link  to={Link} as="login">Login</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header
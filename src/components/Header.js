import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'}>Home
            </Nav.Link>
            <Nav.Link as={Link} to={'/cart'} className='justify-content-end'>CART
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Header
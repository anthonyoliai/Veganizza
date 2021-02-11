import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar>
        <Nav id='header-nav'>
          <Nav.Link id='header-link'>Home</Nav.Link>
          <Nav.Link id='header-link'>Menu</Nav.Link>
          <Nav.Link id='header-link'>Delivery</Nav.Link>
          <Nav.Link id='header-link'>Contact Us</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  )
}

export default Header

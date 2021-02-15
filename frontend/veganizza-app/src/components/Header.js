import React from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <>
        <Navbar fixed='top'>
          <Nav id='header-nav'>
            <Nav.Link id='header-link'>Home</Nav.Link>
            <Nav.Link id='header-link'>Menu</Nav.Link>
            <Nav.Link id='header-link'>Delivery</Nav.Link>
            <Nav.Link id='header-link'>Contact Us</Nav.Link>
          </Nav>
        </Navbar>
      </>
      <>
        <Image src='images/icons/cart.svg'></Image>
      </>
    </header>
  )
}

export default Header

import React, { useEffect } from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../actions/userActions'
const Header = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const dispatch = useDispatch()
  const { userInfo } = userLogin

  const logoutHandler = () => dispatch(logout())
  return (
    <header>
      <>
        <Navbar fixed='top'>
          <Nav id='header-nav'>
            <LinkContainer to='/'>
              <Nav.Link id='header-link'>Home</Nav.Link>
            </LinkContainer>

            <Nav.Link id='header-link'>Menu</Nav.Link>
            <Nav.Link id='header-link'>Delivery</Nav.Link>
            {userInfo ? (
              <LinkContainer to='/'>
                <Nav.Link onClick={logoutHandler} id='header-link'>
                  Logout
                </Nav.Link>
              </LinkContainer>
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link id='header-link'>Login</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar>
      </>
      <></>

      <div className='cart-area'>
        {userInfo && (
          <p style={{ color: 'white', fontStyle: 'italic' }}>
            Welcome, {userInfo.username}
          </p>
        )}
        <LinkContainer to='/cart'>
          <Image src='images/icons/cart.svg'></Image>
        </LinkContainer>
      </div>
    </header>
  )
}

export default Header

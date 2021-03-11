import React, { useEffect } from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../actions/userActions'
import Bounce from 'react-reveal/Bounce'
const Header = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const dispatch = useDispatch()
  const { userInfo } = userLogin
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  useEffect(() => {}, [dispatch, cartItems])
  const logoutHandler = () => dispatch(logout())

  const getTotalQty = () => {
    let qty = 0
    cartItems.map((item) => (qty += item.qty))
    return qty
  }
  return (
    <header>
      <>
        <div className='header-left'>
          <LinkContainer to='/'>
            <Image className='logo-img' src='/images/pizza_logo.svg'></Image>
          </LinkContainer>

          <Navbar className='navbar-container'>
            <Nav id='header-nav'>
              {userInfo ? (
                <>
                  <LinkContainer to='/myorders'>
                    <Nav.Link id='header-link'>My Orders</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/'>
                    <Nav.Link onClick={logoutHandler} id='header-link'>
                      Logout
                    </Nav.Link>
                  </LinkContainer>
                </>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link id='header-link'>Login</Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar>
        </div>

        <div className='cart-area'>
          {userInfo && (
            <p style={{ color: 'white', fontWeight: '500' }}>
              Welcome {userInfo.username}
            </p>
          )}
          <LinkContainer to='/cart'>
            <div className='header-icon-container'>
              <Image src='/images/icons/cart.svg'></Image>
              {cartItems.length > 0 && (
                <Bounce>
                  <div className='cart-items-count'>
                    <span>{getTotalQty()}</span>
                  </div>
                </Bounce>
              )}
            </div>
          </LinkContainer>
        </div>
      </>
    </header>
  )
}

export default Header

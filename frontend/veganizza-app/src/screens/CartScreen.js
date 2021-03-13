import { Card, Col, Image, ListGroup, Row } from 'react-bootstrap'
import React, { useEffect } from 'react'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../components/Button'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Message from '../components/Message'

const CartScreen = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const { cartItems } = cart
  useEffect(() => {}, [dispatch, cartItems])
  return (
    <>
      <Header></Header>
      <Row className='cartRow justify-content-center cartScreen'>
        <Col xl={6} lg={8} md={8} xs={12}>
          <h1 style={{ fontWeight: '500', fontSize: '2rem' }}>SHOPPING CART</h1>
          {cartItems.length === 0 ? (
            <Message variant='primary'>
              Your cart is empty! <Link to='/'>Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant='flush'>
              {cartItems.map((item, index) => (
                <ListGroup.Item key={item.product}>
                  <Row className='align-items-center'>
                    <Col xl={2} md={4} xs={2} style={{ padding: '0' }}>
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fluid
                      ></Image>
                    </Col>
                    <Col xl={3} md={2} xs={3} style={{ fontWeight: '500' }}>
                      {item.product.name} {''}x{item.qty}
                    </Col>
                    <Col xl={1} md={2} xs={3} style={{ fontWeight: '500' }}>
                      ${item.product.price}
                    </Col>
                    <Col xl={3} md={3} xs={2} align='center'>
                      <button
                        className='button cart-button'
                        onClick={() =>
                          item.qty > 1 && dispatch(addToCart(item.product, -1))
                        }
                      >
                        -
                      </button>
                      <button
                        className='button cart-button'
                        onClick={() => dispatch(addToCart(item.product, 1))}
                      >
                        +
                      </button>
                    </Col>

                    <Col xl={2} md={1} xs={2}>
                      <button
                        className='remove-cart-btn'
                        style={{
                          border: 'none',
                          backgroundColor: 'white',
                        }}
                        onClick={() => dispatch(removeFromCart(item.product))}
                      >
                        <i className='fas fa-trash fa-lg'></i>
                      </button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        {cartItems.length > 0 && (
          <Col xl={4} lg={4} md={4}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h2 className='cart-h2' style={{ marginBottom: '1rem' }}>
                    SUBTOTAL (
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}) ITEMS
                  </h2>
                  {cartItems.map((item) => (
                    <p style={{ fontWeight: '500' }}>
                      {item.product.name} {''} x{item.qty} {''}{' '}
                    </p>
                  ))}
                  <span style={{ fontWeight: '500' }}>
                    TOTAL: $
                    {cartItems
                      .reduce(
                        (acc, item) => acc + item.qty * item.product.price,
                        0
                      )
                      .toFixed(2)}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to='/shipping'>
                    <Button
                      width='100%'
                      text='Proceed to Checkout'
                      style={{ display: 'block', padding: '1rem' }}
                      className='checkout-btn'
                    ></Button>
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        )}
      </Row>
    </>
  )
}

export default CartScreen

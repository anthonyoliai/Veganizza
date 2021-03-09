import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Card } from 'react-bootstrap'
import Message from '../components/Message'
import Header from '../components/Header'
import Button from '../components/Button'
import { addToCart, removeFromCart } from '../actions/cartActions'
const CartScreen = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const { cartItems } = cart
  useEffect(() => {}, [dispatch, cartItems])
  return (
    <>
      <Header></Header>
      <Row className='cartRow justify-content-center cartScreen'>
        <Col md={5}>
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
                    <Col md={2} style={{ padding: '0' }}>
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fluid
                      ></Image>
                    </Col>
                    <Col md={2} style={{ fontWeight: '500' }}>
                      {item.product.name}
                    </Col>
                    <Col md={2} style={{ fontWeight: '500' }}>
                      ${item.product.price}
                    </Col>
                    <Col md={2} align='center'>
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
                    <Col mod={1}>x{item.qty}</Col>
                    <Col md={2}>
                      <button
                        style={{
                          border: 'none',
                          backgroundColor: 'white',
                        }}
                        onClick={() => dispatch(removeFromCart(item.product))}
                      >
                        <i className='fas fa-trash'></i>
                      </button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        {cartItems.length > 0 && (
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h2 style={{ marginBottom: '1rem' }}>
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

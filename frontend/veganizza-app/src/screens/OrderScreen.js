import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Card } from 'react-bootstrap'
import Message from '../components/Message'
import Header from '../components/Header'
import { createOrder, resetOrder } from '../actions/orderActions'
import { resetCart } from '../actions/cartActions'
import { PayPalButton } from 'react-paypal-button-v2'

const OrderScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const userLogin = useSelector((state) => state.userLogin)
  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate
  const { userInfo } = userLogin
  const dispatch = useDispatch()
  const { cartItems, shippingAddress } = cart

  console.log(shippingAddress)
  const addDecimals = (number) => (Math.round(number * 100) / 100).toFixed(2)
  console.log(userLogin)
  if (!userInfo) history.push('/login')

  useEffect(() => {
    if (success) {
      dispatch(resetOrder())
      history.push(`/order/${order._id}`)
    }
  }, [dispatch, cartItems, orderCreate])

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult)

    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        totalPrice: cart.totalPrice,
        isPaid: true,
        paidAt: Date.now(),
      })
    )
    dispatch(resetCart())
  }

  cart.itemsPrice = addDecimals(
    cartItems.reduce((acc, item) => acc + item.product.price * item.qty, 0)
  )
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 4.99)

  cart.totalPrice = (
    Number(cart.itemsPrice) + Number(cart.shippingPrice)
  ).toFixed(2)

  return (
    <>
      {error && <Message variant='danger'>{error}</Message>}
      <Header></Header>
      <Row className='cartRow orderRow justify-content-center '>
        <Col xl={6} md={6}>
          {cartItems.length === 0 ? (
            <Message variant='primary'>
              Your cart is empty! <Link to='/'>Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant='flush'>
              <h3>ITEMS OF CHOICE</h3>
              {cartItems.map((item, index) => (
                <ListGroup.Item key={item.product}>
                  <Row className='align-items-center'>
                    <Col lg={2} md={3} s={4} xs={3} style={{ padding: '0' }}>
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fluid
                        rounded
                      ></Image>
                    </Col>
                    <Col md={3} s={3} xs={4}>
                      {item.product.name}
                    </Col>
                    <Col md={3} s={3} xs={3}>
                      ${item.product.price}
                    </Col>
                    <Col md={3} s={3} xs={2}>
                      x{item.qty}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
              <h3 style={{ marginTop: '1rem' }}>SHIPPING DETAILS</h3>
              <ListGroup.Item className='shipping-details'>
                <p>
                  Address: {''}
                  {shippingAddress.address}, {shippingAddress.city},{' '}
                  {shippingAddress.postalCode}, {shippingAddress.country}
                </p>
              </ListGroup.Item>
            </ListGroup>
          )}
        </Col>
        {cartItems.length > 0 && (
          <Col className='order-col' xl={3} md={5}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item className='order-header'>
                  <h3>ORDER SUMMARY</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Items</Col>
                    <Col>${cart.itemsPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Delivery Fee</Col>
                    <Col>${cart.shippingPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row style={{ fontWeight: '600' }}>
                    <Col>Total</Col>
                    <Col>${cart.totalPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <PayPalButton
                    amount={cart.totalPrice}
                    onSuccess={successPaymentHandler}
                  ></PayPalButton>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        )}
      </Row>
    </>
  )
}

export default OrderScreen

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Card } from 'react-bootstrap'
import Message from '../components/Message'
import Header from '../components/Header'
import { createOrder } from '../actions/orderActions'
import { PayPalButton } from 'react-paypal-button-v2'

const OrderScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const userLogin = useSelector((state) => state.userLogin)
  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate
  const { userInfo } = userLogin
  const dispatch = useDispatch()
  const { cartItems, shippingAddress } = cart
  const [sdkReady, setSdkReady] = useState(false)

  console.log(shippingAddress)
  const addDecimals = (number) => (Math.round(number * 100) / 100).toFixed(2)
  console.log(userLogin)
  if (!userInfo) history.push('/login')

  const addPaypalScript = async () => {
    const { data: clientId } = await axios.get('/api/config/paypal')
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
    script.async = true
    script.onload = () => {
      setSdkReady(true)
    }
    document.body.appendChild(script)
  }

  useEffect(() => {
    if (!window.PAYPAL) {
    } else {
      setSdkReady(true)
    }
  }, [dispatch, cartItems, order])

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult)

    dispatch(
      createOrder({
        user: userInfo,
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        totalPrice: cart.totalPrice,
        isPaid: true,
        paidAt: Date.now(),
      })
    )
    history.push(`/order/${order._id}`)
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
      <Row className='cartRow justify-content-center '>
        <Col md={4}>
          <h3>ORDER ITEMS</h3>
          {cartItems.length === 0 ? (
            <Message variant='primary'>
              Your cart is empty! <Link to='/'>Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant='flush'>
              {cartItems.map((item, index) => (
                <ListGroup.Item key={item.product}>
                  <Row className='align-items-center'>
                    <Col md={1} style={{ padding: '0' }}>
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fluid
                        rounded
                      ></Image>
                    </Col>
                    <Col md={3}>{item.product.name}</Col>
                    <Col md={2}>${item.product.price}</Col>
                    <Col md={1}>x{item.qty}</Col>
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
        <Col className='order-col' md={3}>
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
      </Row>
    </>
  )
}

export default OrderScreen

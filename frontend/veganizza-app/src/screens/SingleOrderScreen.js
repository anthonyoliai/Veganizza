import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Card } from 'react-bootstrap'
import Header from '../components/Header'
import { getOrderById, getAnimations } from '../actions/orderActions'
import Message from '../components/Message'
import Lottie from 'react-lottie'

const SingleOrderScreen = ({ history, match }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const orderGet = useSelector((state) => state.orderGet)

  const orderAnimation = useSelector((state) => state.orderAnimation)
  const { animation, error: animError } = orderAnimation
  const DELIVERY_TIME = 30 * 60000
  const { order, loading, error } = orderGet
  const { userInfo } = userLogin
  const dispatch = useDispatch()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  if (!userInfo) history.push('/login')

  useEffect(() => {
    dispatch(getAnimations('3075-delivery-van.json'))
    dispatch(getOrderById(match.params.id))
    const interval = setInterval(() => {
      dispatch(getOrderById(match.params.id))
    }, 10000)
    return () => clearInterval(interval)
  }, [])
  return (
    <>
      {error && <Message variant='danger'>{error}</Message>}
      <Header></Header>
      {order && (
        <Row className='cartRow justify-content-center single-order '>
          <Col md={4}>
            <ListGroup variant='flush'>
              <h3>ITEMS OF CHOICE</h3>
              {order.orderItems.map((item, index) => (
                <ListGroup.Item key={item.product}>
                  <Row className='align-items-center' align='center'>
                    <Col md={2}>
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
                <Row>
                  <Col md={12}>
                    <p>
                      Address: {''}
                      {order.shippingAddress.address},{' '}
                      {order.shippingAddress.city},{' '}
                      {order.shippingAddress.postalCode},{' '}
                      {order.shippingAddress.country}
                    </p>
                  </Col>
                </Row>
              </ListGroup.Item>
              <h3 style={{ marginTop: '1rem' }}>ORDER STATUS</h3>
              <ListGroup.Item>
                <Row>
                  <Col md={12}>
                    <p style={{ fontWeight: '500' }}>
                      {order.isDelivered
                        ? 'Delivered'
                        : `Estimated time of delivery: ${String(
                            new Date(new Date().getTime() + DELIVERY_TIME)
                          )
                            .split(' ')
                            .slice(0, 5)
                            .join(' ')}`}
                    </p>
                  </Col>
                </Row>
              </ListGroup.Item>
              {!order.isDelivered && (
                <ListGroup.Item className='animation'>
                  <Lottie options={defaultOptions} />
                </ListGroup.Item>
              )}
            </ListGroup>
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
                    <Col>${order.itemsPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Delivery Fee</Col>
                    <Col>${order.shippingPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row style={{ fontWeight: '600' }}>
                    <Col>Total</Col>
                    <Col>${order.totalPrice}</Col>
                  </Row>
                </ListGroup.Item>
                {order.isPaid ? (
                  <Message variant='success'> Paid on {order.paidAt}</Message>
                ) : (
                  <Message variant='danger'>Not paid.</Message>
                )}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  )
}

export default SingleOrderScreen

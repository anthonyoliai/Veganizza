import { Card, Col, Image, ListGroup, Row, Spinner } from 'react-bootstrap'
import React, { useEffect } from 'react'
import { getAnimations, getOrderById } from '../actions/orderActions'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../components/Header'
import Lottie from 'react-lottie'
import Message from '../components/Message'

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
    }, 60000)
    return () => clearInterval(interval)
  }, [dispatch, match.params.id])
  return (
    <>
      <Header></Header>
      {loading ? (
        <Spinner
          animation='border'
          role='status'
          style={{
            width: '100px',
            height: '100px',
            margin: 'auto',
            display: 'block',
            position: 'absolute',
            top: '50%',
            left: '50%',
          }}
        >
          <span className='sr-only'>Loading</span>
        </Spinner>
      ) : animError ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          {' '}
          {order && (
            <Row className='cartRow justify-content-center single-order '>
              <Col xl={6} md={6}>
                <ListGroup variant='flush'>
                  <h3>ITEMS OF CHOICE</h3>
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={item.product}>
                      <Row className='align-items-center' align='center'>
                        <Col xl={3} lg={2} md={4} s={2} xs={4}>
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fluid
                            rounded
                          ></Image>
                        </Col>
                        <Col md={3} xs={3}>
                          {item.product.name}
                        </Col>
                        <Col md={3} xs={3}>
                          ${item.product.price}
                        </Col>
                        <Col md={3} xs={2}>
                          x{item.qty}
                        </Col>
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
                </ListGroup>
              </Col>

              <Col className='order-col' xl={3} md={5}>
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
                      <Message variant='success'>
                        {' '}
                        Paid on {order.paidAt}
                      </Message>
                    ) : (
                      <Message variant='danger'>Not paid.</Message>
                    )}
                    <ListGroup.Item>
                      <h3>ORDER STATUS</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col md={12}>
                          <p style={{ fontWeight: '500' }}>
                            {order.isDelivered ? (
                              <Message variant='success'>
                                Order has been delivered!
                              </Message>
                            ) : (
                              `Estimated time of delivery: ${new Date(
                                Date.parse(order.createdAt) + DELIVERY_TIME
                              ).toLocaleTimeString()}`
                            )}
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
                </Card>
              </Col>
            </Row>
          )}
        </>
      )}
    </>
  )
}

export default SingleOrderScreen

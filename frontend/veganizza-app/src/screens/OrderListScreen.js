import React, { useState, useEffect } from 'react'
import { Row, Col, Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { getMyOrders } from '../actions/orderActions'
import Header from '../components/Header'
import Button from '../components/Button'
import dateFormat from 'dateformat'
import Loader from '../components/Loader'

const ProfileScreen = ({ history }) => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const orderList = useSelector((state) => state.orderList)
  const { loading: loadingOrders, error: errorOrders, orders } = orderList

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      dispatch(getMyOrders())
    }
  }, [])

  return (
    <>
      <Header></Header>
      <div className='my-order-container'>
        <Row
          className='align-items-center justify-content-center'
          align='center'
        >
          <Col md={8}>
            <h3 style={{ marginBottom: '1rem' }} className='order-header'>
              MY ORDERS
            </h3>
            {loadingOrders ? (
              <Loader></Loader>
            ) : errorOrders ? (
              <Message variant='danger'>{errorOrders}</Message>
            ) : (
              <Table striped bordered hover responsive className='table-sm'>
                <thead>
                  <tr>
                    <th>ORDER</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                    <th>DELIVERED</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {orders ? (
                    orders.map((order, key) => (
                      <tr key={order._id}>
                        <LinkContainer
                          className='id-container'
                          to={`/order/${order._id}`}
                        >
                          <td>#{key}</td>
                        </LinkContainer>

                        <td>
                          {dateFormat(
                            order.createdAt,
                            'dddd, mmmm dS, yyyy, h:MM:ss TT'
                          )}
                        </td>
                        <td>${order.totalPrice}</td>

                        <td>
                          {order.isDelivered ? (
                            <i
                              className='fas fa-check'
                              style={{ color: 'green' }}
                            ></i>
                          ) : (
                            <i
                              className='fas fa-times'
                              style={{ color: 'red' }}
                            ></i>
                          )}
                        </td>
                        <td>
                          <LinkContainer to={`/order/${order._id}`}>
                            <Button
                              className='order-detail'
                              text='View'
                              icon='fas fa-eye'
                              clickFunc={() =>
                                history.push(`/order/${order._id}`)
                              }
                            ></Button>
                          </LinkContainer>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <></>
                  )}
                </tbody>
              </Table>
            )}
          </Col>
        </Row>
      </div>
    </>
  )
}

export default ProfileScreen

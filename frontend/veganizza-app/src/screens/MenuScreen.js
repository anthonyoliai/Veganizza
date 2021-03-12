import { Col, Container, Image, Row } from 'react-bootstrap'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../components/Loader'
import MenuItem from '../components/MenuItem'
import Message from '../components/Message'
import { listProducts } from '../actions/productActions'

const MenuScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  return (
    <section id='menu-section'>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <div className='menu-screen'>
          {' '}
          <div className='menu-text'>
            <Image src='images/icons/pizza_icon.svg'></Image>
            <h2
              style={{
                textAlign: 'center',
                fontWeight: '600',
                fontSize: '3rem',
                zIndex: '10',
                position: 'relative',
              }}
            >
              OUR MENU
            </h2>
          </div>
          <div className='menu-items'>
            <Container fluid>
              <Row xs={1} s={2} md={1} lg={2} xl={3}>
                {products &&
                  products.map((product) => (
                    <Col key={product._id}>
                      <MenuItem product={product}></MenuItem>
                    </Col>
                  ))}
              </Row>
            </Container>
          </div>
        </div>
      )}
    </section>
  )
}

export default MenuScreen

import React, { useEffect } from 'react'
import MenuItem from '../components/MenuItem'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
const MenuScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  return (
    <>
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
              <Row xs={1} s={2} md={2} lg={2} xl={3}>
                {products &&
                  products.map((product, index) => (
                    <Col>
                      <MenuItem product={product}></MenuItem>
                    </Col>
                  ))}
              </Row>
            </Container>
          </div>
        </div>
      )}
    </>
  )
}

export default MenuScreen

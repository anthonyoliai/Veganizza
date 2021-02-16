import React, { useEffect } from 'react'
import MenuItem from '../components/MenuItem'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'

const MenuScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  return (
    <>
      <div className='menu-text'>
        <Image src='images/icons/pizza_icon.svg'></Image>
        <h2
          style={{ textAlign: 'center', fontWeight: '600', fontSize: '3rem' }}
        >
          OUR MENU
        </h2>
      </div>

      <div className='menu-items'>
        <Container fluid>
          <Row xs={1} s={2} md={2} lg={3}>
            {products &&
              products.map((product, index) => (
                <Col>
                  <MenuItem
                    image={product.image}
                    title={product.name}
                    price={product.price}
                    description={product.description}
                  ></MenuItem>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default MenuScreen

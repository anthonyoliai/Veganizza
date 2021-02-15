import React from 'react'
import MenuItem from '../components/MenuItem'
import { Container, Row, Col, Image } from 'react-bootstrap'
const MenuScreen = () => {
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
          <Row>
            <Col lg={true}>
              <MenuItem
                image='images/thumbnail/pizza_vegeroni_thumb.jpg'
                title='Pizza Vegeroni'
                price={13.99}
                description='Pizza with vegan pepperoni, mushrooms and black olives.'
              ></MenuItem>
            </Col>
            <Col lg={true}>
              <MenuItem
                image='images/thumbnail/pizza_pancheta_thumb.jpg'
                title='Pizza Pancheta'
                price={16.99}
                description='Pan crusted pizza.Mushroom, garlic, and greenpeppers.'
              ></MenuItem>
            </Col>
            <Col lg={true}>
              <MenuItem
                image='images/thumbnail/pizza_diavlo_thumb.jpg'
                title='Pizza Diavlo'
                price={14.99}
                description='Stone oven pizza. Cherry tomatoes, olives, basil and vegan pepperoni.'
              ></MenuItem>
            </Col>
          </Row>
          <Row>
            <Col lg={true}>
              <MenuItem
                image='images/thumbnail/pizza_margare_thumb.jpg'
                title='Pizza Margare'
                price={10.99}
                description='Pizza with basil, vegan mozzarella and tomato sauce.'
              ></MenuItem>
            </Col>
            <Col lg={true}>
              <MenuItem
                image='images/thumbnail/pizza_veggie_thumb.jpg'
                title='Pizza Veggie'
                price={12.99}
                description='Pizza with an assortiment of vegetables.'
              ></MenuItem>
            </Col>
            <Col lg={true}>
              <MenuItem
                image='images/thumbnail/pizza_royale_thumb.jpg'
                title='Pizza Royale'
                price={25.99}
                description='Pizza with black truffles,mushrooms and basil.'
              ></MenuItem>
            </Col>
          </Row>
          <Row>
            <Col lg={true}>
              <MenuItem
                image='images/thumbnail/pizza_jardina_thumb.jpg'
                title='Pizza Jardina'
                price={17.99}
                description='Stone oven pizza. Black olives, three colored peppers with cucumber and corn.'
              ></MenuItem>
            </Col>
            <Col lg={true}>
              <MenuItem
                image='images/thumbnail/pizza_tren_thumb.jpg'
                title='Pizza Tren'
                price={12.99}
                description='Pizza with hot peppers and cherry tomatoes.'
              ></MenuItem>
            </Col>
            <Col lg={true}>
              <MenuItem
                image='images/thumbnail/pizza_tren_thumb.jpg'
                title='Pizza Tren'
                price={12.99}
                description='Pizza with hot peppers and cherry tomatoes.'
              ></MenuItem>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default MenuScreen

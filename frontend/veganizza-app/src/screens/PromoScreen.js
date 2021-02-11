import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Image } from 'react-bootstrap'
const PromoScreen = () => {
  return (
    <div className='promo-carousel'>
      <Carousel pause='hover' className='bg-dark'>
        <Carousel.Item key='1'>
          <Carousel.Caption className='carousel-caption'>
            <h2>TWO MEDIUM PIZZAS FOR $13.99</h2>
            <br></br>
            <h2 style={{ textAlign: 'left' }}>USE CODE 2MD21</h2>
          </Carousel.Caption>
          <Image src='images/promo.jpg'></Image>
        </Carousel.Item>
        <Carousel.Item key='2'>
          <Image src='images/promo2.jpg'></Image>
          <Carousel.Caption className='carousel-caption'>
            <h2
              style={{
                position: 'absolute',
                left: '0%',
              }}
            >
              {' '}
              MENU DEAL PIZZA + DRINK FOR $8.99!
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item key='3'>
          <Image src='images/promo3.jpg'></Image>
          <Carousel.Caption className='carousel-caption'>
            <h2>EAT AT OUR RESTAURANT FOR 30% LESS</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default PromoScreen

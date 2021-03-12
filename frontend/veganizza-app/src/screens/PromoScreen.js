import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Carousel from 'react-bootstrap/Carousel'
import { Image } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listPromos } from '../actions/promoActions.js'

const PromoScreen = () => {
  const dispatch = useDispatch()
  const promoList = useSelector((state) => state.promoList)
  const { loading, promos, error } = promoList

  useEffect(() => {
    dispatch(listPromos())
  }, [dispatch])

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          {' '}
          <div className='promo-carousel'>
            <Carousel pause='hover' className='bg-dark'>
              {promos &&
                promos.map((promo) => (
                  <Carousel.Item key={promo._id}>
                    <Carousel.Caption className='carousel-caption'>
                      <h2>{promo.description}</h2>
                    </Carousel.Caption>
                    <Image src={promo.image}></Image>
                  </Carousel.Item>
                ))}
            </Carousel>
          </div>
        </>
      )}
    </>
  )
}

export default PromoScreen

import HotItem from '../components/HotItem'
import { Image } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import React from 'react'
import { useSelector } from 'react-redux'

const HotItemsScreen = () => {
  const productList = useSelector((state) => state.productList)
  const { products, loading, error } = productList
  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <div className='topSellersContainer'>
            <div className='topSellers'>
              <Image className='star-svg' src='images/star.svg'></Image>
              <>
                <h2 style={{ color: '#C72626', paddingRight: '15px' }}>TOP</h2>{' '}
                <h2>SELLERS</h2>
              </>
            </div>
            <div className='hot-items-container'>
              {products &&
                products.map(
                  (product) =>
                    product.topSeller && (
                      <HotItem
                        style={{ paddingBottom: '50px' }}
                        product={product}
                        key={product._id}
                      ></HotItem>
                    )
                )}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default HotItemsScreen

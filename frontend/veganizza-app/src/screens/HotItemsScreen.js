import React, { useEffect } from 'react'
import HotItem from '../components/HotItem'
import { Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
const HotItemsScreen = () => {
  const productList = useSelector((state) => state.productList)
  const { products } = productList
  return (
    <>
      <div className='topSellersContainer'>
        <div className='topSellers'>
          <Image src='images/star.svg'></Image>
          <>
            <h2 style={{ color: '#C72626', paddingRight: '15px' }}>TOP</h2>{' '}
            <h2>SELLERS</h2>
          </>
        </div>
        <div className='hot-items-container'>
          {products.map(
            (product) =>
              product.topSeller && (
                <HotItem
                  style={{ paddingBottom: '50px' }}
                  image={product.image}
                  name={product.name}
                  description={product.description}
                ></HotItem>
              )
          )}
        </div>
      </div>
    </>
  )
}

export default HotItemsScreen

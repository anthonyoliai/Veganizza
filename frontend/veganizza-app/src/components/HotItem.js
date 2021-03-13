import Button from '../components/Button'
import { Card } from 'react-bootstrap'
import React from 'react'
import { addToCart } from '../actions/cartActions'
import { useDispatch } from 'react-redux'

const HotItem = ({ product }) => {
  const dispatch = useDispatch()
  const dispatchCart = () => {
    dispatch(addToCart(product, 1))
  }

  return (
    <div>
      <Card
        border='danger'
        style={{ borderStyle: 'dashed', borderWidth: '2px' }}
      >
        <Card.Img variant='top' src={product.image} />
        <Card.Body>
          <Card.Title style={{ display: 'inline' }}>{product.name}</Card.Title>
          <span
            style={{
              fontWeight: '600',
              float: 'right',
              position: 'relative',
              fontSize: '1rem',
            }}
          >
            $13.99
          </span>
          <Card.Text style={{ fontStyle: 'italic' }}>
            {product.description}
          </Card.Text>
        </Card.Body>
        <Button
          className='btn-test'
          width='120px'
          text='Add to Cart'
          clickFunc={dispatchCart}
        ></Button>
      </Card>
    </div>
  )
}

export default HotItem

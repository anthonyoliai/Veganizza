import React from 'react'
import { Card } from 'react-bootstrap'
import Button from '../components/Button'
const HotItem = ({ image, name, description }) => {
  return (
    <div>
      <Card
        border='danger'
        style={{ width: '18rem', borderStyle: 'dashed', borderWidth: 2 }}
      >
        <Card.Img variant='top' src={image} />
        <Card.Body>
          <Card.Title style={{ display: 'inline' }}>{name}</Card.Title>
          <span
            style={{
              fontWeight: '500',
              float: 'right',
              position: 'relative',
              fontSize: '1.1rem',
            }}
          >
            $13.99
          </span>
          <Card.Text style={{ fontStyle: 'italic' }}>{description}</Card.Text>
        </Card.Body>
        <Button className='btn-test' width='120px' text='Add to Cart'></Button>
      </Card>
    </div>
  )
}

export default HotItem

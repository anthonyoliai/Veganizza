import React from 'react'
import { Card } from 'react-bootstrap'
import Button from '../components/Button'
const BlogItem = ({ image, title, description }) => {
  return (
    <div className='blog-item'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={image} />
        <Card.Body>
          <Card.Title style={{ fontWeight: '600', textAlign: 'left' }}>
            {title}
          </Card.Title>
          <Card.Text
            style={{ textAlign: 'left', fontSize: '0.8rem', fontWeight: '500' }}
          >
            {description}
          </Card.Text>
        </Card.Body>
        <Button className='btn-test' width='100px' text='Read more'></Button>
      </Card>
    </div>
  )
}

export default BlogItem

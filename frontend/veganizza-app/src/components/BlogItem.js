import React from 'react'
import { Card } from 'react-bootstrap'
import Button from '../components/Button'
import { useHistory } from 'react-router-dom'
const BlogItem = ({ image, title, description, id }) => {
  const history = useHistory()
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

        <Button
          className='btn-test'
          width='100px'
          text='Read more'
          clickFunc={() => history.push(`/posts/${id}`)}
        ></Button>
      </Card>
    </div>
  )
}

export default BlogItem

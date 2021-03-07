import React, { useEffect } from 'react'
import { Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../actions/postActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Card } from 'react-bootstrap'
import Header from '../components/Header'
const RestaurantScreen = ({ match }) => {
  const dispatch = useDispatch()
  const singlePost = useSelector((state) => state.getPost)
  const { loading, post, error } = singlePost
  console.log(post)
  useEffect(() => {
    dispatch(getPost(match.params.id))
  }, [])

  return (
    <>
      <Header></Header>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        post && (
          <div className='restaurant-container'>
            <div>
              <h3>{post.title}</h3>
              <Image src={`http://localhost:3000/` + post.image}></Image>
            </div>

            <p>{post.description}</p>
          </div>
        )
      )}
    </>
  )
}

export default RestaurantScreen

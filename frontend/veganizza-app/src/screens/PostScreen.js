import { Col, Image, Row } from 'react-bootstrap'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Fade from 'react-reveal/Fade'
import Header from '../components/Header'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { getPost } from '../actions/postActions'

const PostScreen = ({ match }) => {
  const dispatch = useDispatch()
  const singlePost = useSelector((state) => state.getPost)
  const { loading, post, error } = singlePost
  console.log(post)
  useEffect(() => {
    dispatch(getPost(match.params.id))
  }, [dispatch, match.params.id])

  return (
    <>
      <Header></Header>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        post && (
          <Fade>
            <div className='post-container'>
              <Row md={12} className='justify-content-center '>
                <Col xl={6} md={12}>
                  <div>
                    <Image src={`/` + post.image}></Image>
                  </div>
                </Col>
                <Col xl={5} md={12}>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </Col>
              </Row>
            </div>
          </Fade>
        )
      )}
    </>
  )
}

export default PostScreen

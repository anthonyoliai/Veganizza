import React, { useEffect } from 'react'
import BlogItem from '../components/BlogItem'
import { useDispatch, useSelector } from 'react-redux'
import { listPosts } from '../actions/postActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
const BlogScreen = () => {
  const dispatch = useDispatch()
  const postList = useSelector((state) => state.postList)
  const { loading, posts, error } = postList
  useEffect(() => {
    dispatch(listPosts())
  }, [dispatch])
  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <h2
            style={{
              fontWeight: '600',
              textAlign: 'center',
              paddingBottom: '1rem',
              fontSize: '3rem',
            }}
          >
            Latest News
          </h2>
          <div className='blog-container'>
            {posts &&
              posts.map((post) => (
                <BlogItem
                  image={post.image}
                  title={post.title}
                  description={post.description
                    .split(' ')
                    .slice(0, 40)
                    .join(' ')
                    .concat('...')}
                ></BlogItem>
              ))}
          </div>
        </>
      )}
    </>
  )
}

export default BlogScreen

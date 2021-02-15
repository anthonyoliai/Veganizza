import React from 'react'
import BlogItem from '../components/BlogItem'
const BlogScreen = () => {
  return (
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
        <BlogItem
          image='/images/about_us.jpg'
          title='About us'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.'
        ></BlogItem>
        <BlogItem
          image='/images/our_policy.jpg'
          title='Our Policy'
          description='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </BlogItem>'
        ></BlogItem>

        <BlogItem
          image='/images/user_satisfaction.jpg'
          title='User Satisfaction'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.'
        ></BlogItem>
      </div>
    </>
  )
}

export default BlogScreen

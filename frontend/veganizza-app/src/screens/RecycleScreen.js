import React from 'react'
import { Image } from 'react-bootstrap'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
const RecycleScreen = () => {
  return (
    <div className='recycle-main-container'>
      <Bounce left>
        <div className='recycle-text'>
          <h2>Buy a vegan pizza and we will donate to #OneTreePlanted!</h2>
          <p>
            Veganizza donates 1$ to the{' '}
            <span style={{ color: '#e93f3f' }}>
              One Tree Planted foundation
            </span>{' '}
            for each pizza you purchase. You get a vegan pizza ánd contribute to
            the environment. Can it get any better?
          </p>
        </div>
      </Bounce>
      <Bounce right>
        <div className='recycle-container'>
          <div className='recycle-left-img'>
            <Image className='hover-img' src='/images/recycle1.jpg'></Image>
            <Image className='hover-img' src='/images/recycle3.jpg'></Image>
          </div>
          <div className='recycle-right-img'>
            <Image className='hover-img' src='/images/recycle2.jpg'></Image>
          </div>
        </div>
      </Bounce>
    </div>
  )
}

export default RecycleScreen

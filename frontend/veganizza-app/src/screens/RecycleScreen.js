import React from 'react'
import { Image } from 'react-bootstrap'
const RecycleScreen = () => {
  return (
    <div className='recycle-main-container'>
      <div className='recycle-text'>
        <h2>Buy a vegan pizza and we will donate to #OneTreePlanted!</h2>
        <p>
          Veganizza donates 1$ to the OneTreePlanted foundation for each pizza
          you purchase. You get a vegan pizza ánd contribute to the environment.
          Can it get any better?
        </p>
      </div>
      <div className='recycle-container'>
        <div className='recycle-left-img'>
          <Image src='/images/recycle1.jpg'></Image>
          <Image src='/images/recycle3.jpg'></Image>
        </div>
        <div className='recycle-right-img'>
          <Image src='/images/recycle2.jpg'></Image>
        </div>
      </div>
    </div>
  )
}

export default RecycleScreen

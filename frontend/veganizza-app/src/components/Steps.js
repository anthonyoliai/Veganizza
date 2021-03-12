import Image from 'react-bootstrap/Image'
import React from 'react'

const Steps = () => {
  return (
    <div className='steps-container'>
      <h3>HOW IT WORKS</h3>
      <div className='stripe'>
        <div style={{ position: 'relative', zIndex: '2' }}>
          <Image className='step-one-img' src='images/step_one.svg'></Image>
          <p>Choose any pizza of your liking!</p>
        </div>
        <div style={{ position: 'relative', zIndex: '2' }}>
          <Image className='step-one-img' src='images/step_two.svg'></Image>
          <p>Order confirmed!</p>
        </div>
        <div style={{ position: 'relative', zIndex: '2' }}>
          <Image className='step-one-img' src='images/step_three.svg'></Image>
          <p>Enjoy your vegan pizza!</p>
        </div>
      </div>
      <div className='bg-stripe'></div>
    </div>
  )
}

export default Steps

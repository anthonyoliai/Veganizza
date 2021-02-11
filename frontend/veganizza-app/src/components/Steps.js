import React from 'react'
import Image from 'react-bootstrap/Image'
const Steps = () => {
  return (
    <div className='steps-container'>
      <h3>HOW IT WORKS</h3>
      <div className='stripe'>
        <div>
          <Image className='step-one-img' src='images/step_one.svg'></Image>
          <p>Choose toppings of your liking!</p>
        </div>
        <div>
          <Image className='step-one-img' src='images/step_two.svg'></Image>
          <p>Order confirmed!</p>
        </div>
        <div>
          <Image className='step-one-img' src='images/step_three.svg'></Image>
          <p>Enjoy your vegan pizza!</p>
        </div>
      </div>
      <div className='bg-stripe'></div>
    </div>
  )
}

export default Steps

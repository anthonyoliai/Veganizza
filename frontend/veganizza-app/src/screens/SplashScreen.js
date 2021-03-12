import React from 'react'
import Image from 'react-bootstrap/Image'
import Button from '../components/Button'
import { Link } from 'react-scroll'

const Splash = () => {
  return (
    <div className='main-splash'>
      <Image className='main-image' src='images/pizza_main.jpg'></Image>

      <div className='splash-text'>
        <h3>Veganizza</h3>
        <p>
          Steaming hot vegan pizza
          <br></br> served in 2 minutes
        </p>
        <Link
          activeClass='active'
          to='menu-section'
          spy={true}
          smooth={true}
          duration={1000}
        >
          <Button
            className='splash-button'
            width='153px'
            height='53px'
            text='Order Now'
          ></Button>
        </Link>
      </div>
    </div>
  )
}

export default Splash

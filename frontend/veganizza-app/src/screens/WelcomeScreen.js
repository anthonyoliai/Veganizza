import Button from '../components/Button'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-scroll'
import React from 'react'

const WelcomeScreen = () => {
  return (
    <>
      <div className='main-welcome'>
        <div className='text-welcome'>
          <h3>
            Welcome to <span style={{ color: '#C72626' }}>Vegan</span>izza
          </h3>
          <p>
            Fresh vegan pizza delivered to you in a matter of minutes! Since
            1989 we have been preparing our homemade pizza crust, airy in the
            inside, while crispy on the outside. This, topped with our homemade
            cheese, which is guaranteed to be super melty, stretchy and savoury.
            Please check our menu to view our fine selection.
          </p>
          <Link
            activeClass='active'
            to='menu-section'
            spy={true}
            smooth={true}
            duration={1000}
          >
            <Button
              className='welcome-button'
              width='153px'
              height='53px'
              text='View Menu'
            ></Button>
          </Link>
        </div>
        <div className='image-welcome'>
          <Image className='welcome-image' src='images/welcome.svg'></Image>
        </div>
      </div>
    </>
  )
}

export default WelcomeScreen

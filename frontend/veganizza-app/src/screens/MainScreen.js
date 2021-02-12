import React from 'react'
import SplashScreen from './SplashScreen'
import WelcomeScreen from './WelcomeScreen'
import Steps from '../components/Steps'
import Fade from 'react-reveal/Fade'
import PromoScreen from './PromoScreen'
import HotItemsScreen from './HotItemsScreen'
import MenuScreen from './MenuScreen'
const MainScreen = () => {
  return (
    <div className='main-screen'>
      <SplashScreen></SplashScreen>
      <Fade left>
        <WelcomeScreen></WelcomeScreen>
      </Fade>
      <Fade bottom>
        <Steps></Steps>
      </Fade>
      <PromoScreen></PromoScreen>
      <HotItemsScreen></HotItemsScreen>
      <MenuScreen></MenuScreen>
      <Fade bottom>
        <Steps></Steps>
      </Fade>
    </div>
  )
}

export default MainScreen

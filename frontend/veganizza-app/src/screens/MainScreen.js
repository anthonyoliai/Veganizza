import React, { useEffect } from 'react'
import SplashScreen from './SplashScreen'
import WelcomeScreen from './WelcomeScreen'
import Steps from '../components/Steps'
import Fade from 'react-reveal/Fade'
import PromoScreen from './PromoScreen'
import HotItemsScreen from './HotItemsScreen'
import MenuScreen from './MenuScreen'
import RestaurantScreen from './RestaurantScreen'
import RecycleScreen from './RecycleScreen'
import BlogScreen from './BlogScreen'
import Footer from '../components/Footer'
import Header from '../components/Header'

const MainScreen = () => {
  return (
    <div className='main-screen'>
      <Header></Header>
      <SplashScreen></SplashScreen>
      <Fade>
        <WelcomeScreen></WelcomeScreen>
      </Fade>
      <Fade bottom>
        <Steps></Steps>
      </Fade>
      <PromoScreen></PromoScreen>

      <Fade>
        <HotItemsScreen></HotItemsScreen>
        <MenuScreen></MenuScreen>
      </Fade>

      <RestaurantScreen></RestaurantScreen>
      <RecycleScreen></RecycleScreen>

      <BlogScreen></BlogScreen>

      <Footer></Footer>
    </div>
  )
}

export default MainScreen

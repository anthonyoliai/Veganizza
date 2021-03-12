import BlogScreen from './BlogScreen'
import Fade from 'react-reveal/Fade'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HotItemsScreen from './HotItemsScreen'
import MenuScreen from './MenuScreen'
import PromoScreen from './PromoScreen'
import React from 'react'
import RecycleScreen from './RecycleScreen'
import RestaurantScreen from './RestaurantScreen'
import SplashScreen from './SplashScreen'
import Steps from '../components/Steps'
import WelcomeScreen from './WelcomeScreen'

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

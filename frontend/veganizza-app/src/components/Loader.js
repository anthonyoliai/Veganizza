import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAnimations } from '../actions/orderActions'
import Lottie from 'react-lottie'

const Loader = () => {
  const dispatch = useDispatch()
  const orderAnimation = useSelector((state) => state.orderAnimation)
  const { animation, error: animError } = orderAnimation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  useEffect(() => {
    dispatch(getAnimations('loader.json'))
  }, [])

  return <Lottie options={defaultOptions} height={200} width={200} />
}

export default Loader

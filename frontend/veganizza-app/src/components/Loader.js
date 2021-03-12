import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Lottie from 'react-lottie'
import { getAnimations } from '../actions/orderActions'

const Loader = () => {
  const dispatch = useDispatch()
  const orderAnimation = useSelector((state) => state.orderAnimation)
  const { animation } = orderAnimation
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
  }, [dispatch])

  return <Lottie options={defaultOptions} height={200} width={200} />
}

export default Loader

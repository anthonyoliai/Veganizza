import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Button = ({ className, width, height, text, clickFunc, style }) => {
  return (
    <button
      className={`button ${className}`}
      style={{ ...style, width: width, height: height }}
      onClick={clickFunc}
    >
      {text}
    </button>
  )
}

export default Button

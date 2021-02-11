import React from 'react'

const Button = ({ className, width, height, text }) => {
  return (
    <button
      className={`button ${className}`}
      style={{ width: width, height: height }}
    >
      {text}
    </button>
  )
}

export default Button

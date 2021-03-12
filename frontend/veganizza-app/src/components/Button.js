import React from 'react'

const Button = ({ className, width, height, text, clickFunc, style, icon }) => {
  return (
    <button
      className={`button ${className}`}
      style={{ ...style, width: width, height: height }}
      onClick={clickFunc}
    >
      {text} {''} {icon && <i className={icon}></i>}
    </button>
  )
}

export default Button

import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, children, dismissible }) => {
  const [show, setShow] = useState(true)
  return (
    show && (
      <Alert
        dismissible={dismissible}
        variant={variant}
        onClick={() => setShow(false)}
      >
        {children}
      </Alert>
    )
  )
}

Message.defaultProps = {
  variant: 'info',
}
export default Message

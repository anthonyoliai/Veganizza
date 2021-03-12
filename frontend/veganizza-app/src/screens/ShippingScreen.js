import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../components/Button'
import { Form } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import Message from '../components/Message'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const { shippingAddress } = cart
  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)
  const [message, setMessage] = useState(null)
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    if (!address || !city || !postalCode || !country)
      setMessage('Please enter all your details!')
    else {
      dispatch(saveShippingAddress({ address, city, postalCode, country }))
      history.push('/order')
    }
  }
  if (!userInfo) history.push('/login')
  return (
    <div className='login-container'>
      <FormContainer>
        <h1 style={{ fontWeight: 600, textAlign: 'center' }}>Shipping</h1>
        {message && <Message variant='danger'>{message}</Message>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='address'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='city'>
            <Form.Label>City</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your city'
              value={city}
              onChange={(e) => setCity(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='postalCode'>
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your postal code'
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='country'>
            <Form.Label>Country</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your country'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button
            text='Continue'
            width='100%'
            type='submit'
            variant='primary'
            style={{ padding: '1rem' }}
          ></Button>
        </Form>
      </FormContainer>
    </div>
  )
}

export default ShippingScreen

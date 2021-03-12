import { Col, Form, Row } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../components/Button'
import FormContainer from '../components/FormContainer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { register } from '../actions/userActions'

const RegisterScreen = ({ location, history }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  const redirect = location.search ? location.search.split('=')[1] : '/'

  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  useEffect(() => {
    console.log(userInfo)
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) setMessage('Passwords do not match')
    else dispatch(register(email, password, username))
  }
  return (
    <>
      <Header></Header>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className='login-container'>
          <FormContainer>
            <h1
              style={{
                textAlign: 'center',
                marginTop: '12rem',
                fontWeight: '600',
              }}
            >
              <span style={{ color: '#c72626' }}>Sign</span>up
            </h1>
            {error && (
              <Message
                className='text-center'
                variant='danger'
                dismissible='true'
              >
                Incorrect email or password.
              </Message>
            )}
            {message && <Message variant='danger'>{message}</Message>}
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='username'
                  placeholder='Enter your username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='email'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email-address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='confirmPassword'>
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Confirm password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button
                text='Sign up'
                width='100%'
                type='submit'
                variant='primary'
                style={{ padding: '1rem' }}
              ></Button>
            </Form>
            <Row className='py-3'>
              <Col>
                Have an account? <Link to='/login'>Login</Link>
              </Col>
            </Row>
          </FormContainer>
        </div>
      )}
    </>
  )
}

export default RegisterScreen

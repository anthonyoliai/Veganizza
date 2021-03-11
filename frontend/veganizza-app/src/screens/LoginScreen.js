import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import Header from '../components/Header'
import Button from '../components/Button'
import Loader from '../components/Loader'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    console.log(userInfo)
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  return (
    <>
      <Header></Header>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          {' '}
          <div className='login-container'>
            <FormContainer>
              <h1
                style={{
                  textAlign: 'center',
                  marginBottom: '2rem',
                  fontWeight: '600',
                }}
              >
                <span style={{ color: '#c72626' }}>Log</span>in
              </h1>
              <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter email-address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ border: '1px solid black' }}
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ border: '1px solid black' }}
                  ></Form.Control>
                </Form.Group>
                <Button
                  text='Login'
                  width='100%'
                  type='submit'
                  variant='primary'
                  style={{ padding: '1rem' }}
                ></Button>
              </Form>
              <Row className='py-3'>
                <Col>
                  New Customer?{' '}
                  <Link
                    to={
                      redirect ? `/register?redirect=${redirect}` : '/register'
                    }
                  >
                    Register here
                  </Link>
                </Col>
              </Row>
            </FormContainer>
          </div>
        </>
      )}
    </>
  )
}

export default LoginScreen

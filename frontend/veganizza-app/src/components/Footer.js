import { Col, Container, Form, Image, Row } from 'react-bootstrap'

import Button from './Button'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row md={10}>
          <Col>
            <div className='footer'>
              <Image src='/images/icons/carbon_email.svg'></Image>
              <Image src='/images/icons/foundation_social-twitter.svg'></Image>
              <Image src='/images/icons/simple-icons_deliveroo.svg'></Image>
              <Image src='/images/icons/simple-icons_ubereats.svg'></Image>
              <h5>PRIVACY</h5>
              <a href='/'>Privacy Policy</a>
              <a href='/'>Terms of Service</a>
              <a href='/'>My Personal Data</a>
            </div>
          </Col>
          <Col>
            <div className='footer'>
              <h5 style={{ marginTop: '1rem' }}>CONTACT US</h5>
              <p className='email-footer'>
                Email:{' '}
                <a href='mailto: veganizza@gmail.com'>veganizza@gmail.com</a>
              </p>
              <p>Phone: +3169332243</p>
              <p>Address: </p>
              <p>65 Rue Saint-Dominique</p>
              <p>75007 Paris</p>
            </div>
          </Col>
          <Col>
            <p>Subscribe to newsletter</p>
            <Form>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <div className='form-container'>
                  <Form.Control
                    style={{ display: 'inline-block' }}
                    type='email'
                    placeholder='Enter email'
                  />
                  <Button width='38px' text='>'></Button>
                </div>
                <Form.Text>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <div className='payment-logos'>
            Copyright &copy; Veganizza
            <div>
              <Image src='/images/icons/logos_amex.svg'></Image>
              <Image src='/images/icons/logos_mastercard.svg'></Image>
              <Image src='/images/icons/logos_paypal.svg'></Image>
              <Image src='/images/icons/visa.svg'></Image>
              <Image src='/images/icons/cib_ideal.svg'></Image>
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

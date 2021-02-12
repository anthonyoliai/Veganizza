import React from 'react'
import MenuItem from '../components/MenuItem'
import { Container, Row, Col } from 'react-bootstrap'
const MenuScreen = () => {
  return (
    <div className='menu-items'>
      <Container fluid>
        <Row>
          <Col lg={true}>
            <MenuItem></MenuItem>
          </Col>
          <Col lg={true}>
            <MenuItem></MenuItem>
          </Col>
          <Col lg={true}>
            <MenuItem></MenuItem>
          </Col>
          <Col lg={true}>
            <MenuItem></MenuItem>
          </Col>
        </Row>
        <Row>
          <Col lg={true}>
            <MenuItem></MenuItem>
          </Col>
          <Col lg={true}>
            <MenuItem></MenuItem>
          </Col>
          <Col lg={true}>
            <MenuItem></MenuItem>
          </Col>
          <Col lg={true}>
            <MenuItem></MenuItem>
          </Col>
        </Row>
        <Row>
          <Col lg={true}>
            <MenuItem></MenuItem>
          </Col>
          <Col lg={true}>
            <MenuItem></MenuItem>
          </Col>
          <Col lg={true}>
            <MenuItem></MenuItem>
          </Col>
          <Col lg={true}>
            <MenuItem></MenuItem>
          </Col>
        </Row>
        <Row>
          <Col lg={true}>
            <MenuItem></MenuItem>
          </Col>
          <Col lg={true}>
            <MenuItem></MenuItem>
          </Col>
          <Col lg={true}>
            <MenuItem></MenuItem>
          </Col>
          <Col lg={true}>
            <MenuItem></MenuItem>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MenuScreen

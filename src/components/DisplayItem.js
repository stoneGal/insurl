import React, { Component } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import Modals from './Modals';
import { Link } from 'react-router-dom';

class DisplayItem extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  

  render() {
    return (
      <div className="container-fluid">
        <h4 style={{
            fontSize: '30px',
            fontWeight: '600',
            fontStyle: 'normal',
            color: '#1B2036',
            paddingTop: '3rem'
          }}>Make payment</h4>
        <Row style={{marginTop: '5rem'}}>
          <Col md="9">
            <p style={{lineHeight: '1rem'}}>Bank Transfer</p>
            <p style={{lineHeight: '1rem', fontWeight: 'bold'}}>Bank Name: Bank of Nigeria</p>
            <p style={{lineHeight: '1rem', fontWeight: 'bold'}}>Account Number: 3456789012</p>
          </Col>
          <Col md="3">
            <Link to="/">
              <Button
                style={{
                  backgroundColor: '#F88600',
                  color: '#ffffff',
                  width: '100%',
                }}
              >
                Done
              </Button>
              </Link>
          </Col>
        </Row>
        <p style={{lineHeight: '5rem', fontWeight: '700'}}>OR</p>
        <Row style={{marginTop: '2rem'}}>
          <Col>
            <Form>
              <p>Card payment</p>
              <Form.Group>
                <Form.Label style={{fontWeight:'600'}}>Card name</Form.Label>
                <Form.Control></Form.Control>
              </Form.Group>
              <Row>
                <Col md="8">
                  <Form.Group>
                    <Form.Label style={{fontWeight:'600'}}>Card number</Form.Label>
                    <Form.Control></Form.Control>
                  </Form.Group>
                </Col>
                <Col md="2">
                  <Form.Group>
                    <Form.Label style={{fontWeight:'600'}}>Expiry Date</Form.Label>
                    <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto'}}>
                      <div><Form.Control/></div>
                      <div style={{fontSize: '1.5rem'}}>/</div>
                      <div><Form.Control/></div>
                    </div>
                  </Form.Group>
                </Col>
                <Col md="2">
                <Form.Group>
                  <Form.Label style={{fontWeight:'600'}}>Cvv</Form.Label>
                  <Form.Control></Form.Control>
                </Form.Group>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <Row style={{marginTop: '2rem', marginBottom: '1rem'}}>
          <Col md="9"></Col>
          <Col md="3">
            <Link to="/">
              <Button
                style={{
                  backgroundColor: '#F88600',
                  color: '#ffffff',
                  width: '100%',
                }}
              >
                Pay
              </Button>
              </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DisplayItem;

import React, { Component } from 'react';
import { Button, Row, Col, Form, Dropdown} from 'react-bootstrap';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import Modals from './Modals';
// import { Link } from 'react-router-dom';

class DisplayItem extends Component {

  state = { show: false };
  showModal = () => {
    this.setState({ show: true });
  };

  state = { showMe: false };
  showmodal = () => {
    this.setState({ showMe: true });
  };



  render() {
    return (
      <div className='container-fluid'>
        <p
          style={{
            fontSize: '20px',
            fontWeight: '500',
            fontStyle: 'normal',
            color: '#1B2036',
            paddingTop: '3rem',
          }}
        >
         Policies &gt; BVN and phone number &gt;Policy plan &gt;Enter beneficiary details &gt;Beneficiary details
        </p>
              <div style={{marginBottom:"130px"}}>
                {/* <p></p> */}
              <Dropdown >
                  <Dropdown.Toggle style={{backgroundColor:"#F88600"}} id="dropdown-basic">
                  Please select a payment option
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">GOLD ₦5000</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">BRONZE ₦10000</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">PLATINUM ₦500000</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
              </div>
                



        <Row style={{ marginTop: '5rem' }}>
          
          <Col md='9'>
            <p style={{ lineHeight: '1rem' }}>Bank Transfer</p>
            <p style={{ lineHeight: '1rem', fontWeight: 'bold' }}>
              Bank Name: Bank of Nigeria
            </p>
            <p style={{ lineHeight: '1rem', fontWeight: 'bold' }}>
              Account Number: 3456789012
            </p>
          </Col>
          <Col md='3'>
            


              <Button type="button" onClick={this.showmodal}  
                style={{
                  backgroundColor: '#F88600',
                  color: '#ffffff',
                  width: '100%',
                }}
              >
                Done
              </Button>

             
          </Col>
        </Row>
        <p style={{ lineHeight: '5rem', fontWeight: '700' }}>OR</p>
        <Row style={{ marginTop: '2rem' }}>



        <Modals show={this.state.showMe} >
            <p
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '16px',
                color: '#1B2036',
                lineHeight: '24px',
                marginBottom:"50px"
              }}
            >
             After your transfer, please send your proof <br/>
              of payment via email to info@insurl.com. <br/>
              You will be notified once payment is <br/>
              confirmed and your policy will appear <br/>
              on your dashboard.
            </p>
          </Modals>



          <Col>
            <Form>
              <p>Card payment</p>
              <Form.Group>
                <Form.Label style={{ fontWeight: '600' }}>Card name</Form.Label>
                <Form.Control></Form.Control>
              </Form.Group>
              <Row>
                <Col md='8'>
                  <Form.Group>
                    <Form.Label style={{ fontWeight: '600' }}>
                      Card number
                    </Form.Label>
                    <Form.Control></Form.Control>
                  </Form.Group>
                </Col>
                <Col md='2'>
                  <Form.Group>
                    <Form.Label style={{ fontWeight: '600' }}>
                      Expiry Date
                    </Form.Label>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'auto auto auto',
                      }}
                    >
                      <div>
                        <Form.Control />
                      </div>
                      <div style={{ fontSize: '1.5rem' }}>/</div>
                      <div>
                        <Form.Control />
                      </div>
                    </div>
                  </Form.Group>
                </Col>
                <Col md='2'>
                  <Form.Group>
                    <Form.Label style={{ fontWeight: '600' }}>Cvv</Form.Label>
                    <Form.Control></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        


        <Row style={{ marginTop: '2rem', marginBottom: '1rem' }}>
          <Col md='9'></Col>
          <Col md='3'>
            

            <Modals show={this.state.show} >
            <IoMdCheckmarkCircleOutline
              style={{
                color: '#2BB415',
                fontSize: '100px',
                marginBottom: '8px',
                marginTop: '4px',
              }}
            />
            <p
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '20px',
                lineHeight: '30px',
                color: '#1B2036',
              }}
            >
              
              You are succesfully signed up for Insurl’s Life
              <span>Insurance Policy!</span>
            </p>
          </Modals>
              
              <Button
              type="button" onClick={this.showModal}
                style={{
                  backgroundColor: '#F88600',
                  color: '#ffffff',
                  width: '100%',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontSize: '16px'
                }}
              >
                Pay
              </Button>
            
          </Col>
        </Row>
      </div>
    );
  }
}

export default DisplayItem;

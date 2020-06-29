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
      <div >
        <div
          style={{
            // border: '1px solid red',
            fontSize: '30px',
            fontWeight: '600',
            fontStyle: 'normal',
            color: '#1B2036',
            margin: ' 70px auto',
            lineHeight: '45px',
            
          }}
        >
          <h4>Make payment</h4>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: "center",
            border: '1px solid blue',
            width: "auto",
            margin: "auto",
            // justifyContent: 'space-between',
          }}
        >
          <div className='leftdiv'>
            <p
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '20px',

                color: '#1B2036',
              }}
            >
              Bank transfer
            </p>
            <p
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '20px',
                color: '#1B2036',
              }}
            >
              Bank Name: <span> Bank of Nigeria</span>
            </p>
            <p
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '20px',
                color: '#1B2036',
              }}
            >
              Account number: 3456789012
            </p>
            <p
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '20px',
                color: '#000000',
              }}
            >
              OR
            </p>
          </div>
          <div style={{ border: '1px solid red', width:"auto" }}>
           <Link to="/">
             <Button
              style={{
                backgroundColor: '#F88600',
                color: '#ffffff',
                padding: ' 3px 40px',
                border:"none",
                outline:"none",
                position: "absolute",
                right:"50px"
               
               
              }}
            >
              Done
            </Button>
            </Link> 
          </div>
        </div>

        <div
          className='payment'
          style={{
            // border: '1px solid red',
            marginTop: ' 90px',
            marginBottom: ' 40px',
            // marginLeft: '40px',
            // marginRight: '40px',
          }}
        >
          <p
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '20px',
              lineHeight: '30px',
            }}
          >
            Card payment
          </p>

          <Form>
            <Form.Group>
              <Form.Label
                style={{
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '20px',
                }}
              >
                {' '}
                Card name
              </Form.Label>
              <Form.Control type='name' style={{width:"auto"}} />
            </Form.Group>
          </Form>

          <Form>
            <Row>
              <Col>
                <Form.Label
                  style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '20px',
                    color: '#1B2036',
                  }}
                >
                  {' '}
                  Card number
                </Form.Label>
                <Form.Control type='name' style={{width:"auto"}}/>
              </Col>
              <Col>
                <Form.Label
                  style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '20px',
                    color: '#1B2036',
                  }}
                >
                  {' '}
                  Expiry Date
                </Form.Label>
                <Form.Control type='name'style={{ width: '60px' }}  />
              </Col>

              <Col>
                <Form.Label
                  style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '20px',
                  }}
                >
                  Cvv
                </Form.Label>
                <Form.Control type='name' style={{ width: '40px' }} />
              </Col>
            </Row>
          </Form>
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
              {' '}
              You are succesfully signed up for Insurl’s Life{' '}
              <span>Insurance Policy!</span>
            </p>
          </Modals>
          <Button
            type='button'
            onClick={this.showModal}
            style={{
              backgroundColor: '#F88600',
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontSize: '16px',
              padding: ' 3px 60px',

              marginTop: '30px',
              // marginright: '50px'
              // position:"relative",
              // left: "400px"
            }}
          >
            Pay
          </Button>
        </div>
      </div>
    );
  }
}

export default DisplayItem;

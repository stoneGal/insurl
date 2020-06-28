import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { FaHands } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const DashJsx = (props) => {
  return (
    <div className="container-fluid" style={{paddingTop: '3rem'}}>
      <Row>
        <Col md="9">
          <h4
            style={{
              fontFamily: 'Poppins',
              color: '#1B2036',
              fontWeight: '800'
            }}
          >
            Hello Confidence!
          </h4>
        </Col>
        <Col md="3">
          <Link to= {{ pathname: '/policy', state: { display: true }}}>
          <Button style={{ backgroundColor: '#F88600',}}>
            {' '}
            +Add Policy{' '}
          </Button></Link>
        </Col>
      </Row>
      <Row style={{marginTop: '3rem'}}>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
          {/* Write media query for the width of this card */}
          <div style={{padding: '1rem', width: '60%', backgroundColor: 'white', boxShadow: '2px 2px 2px 2px #888888', borderRadius: '2px'}} class="card">
            <Row>
              <Col xs={9}>
              <p className="card-title" style={{fontWeight: '800'}}>Life Insurance</p>
              </Col>
              <Col xs={3}>
                <FaHands />
              </Col>
            </Row>
            
            <p>Life Insurance Is A Combination Of Caring, Commitment And Common Sense</p>
            <a href="#"><u><p style={{color: '#F88600'}}>Enter>></p></u></a>
          </div>
        </div>
      </Row>
      
      {/* <div
        style={{
          backgroundColor: 'white',
          width: '240px',
          boxShadow: '5px 10px #fffff',
          paddingLeft: '20px',
          paddingTop: '10px',
          paddingBottom: '10px',
          marginTop: '30px',
          marginLeft: '30px',
        }}
      >
        <h6
          style={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '20px',
          }}
        >
          Life insurance{' '}
          <span
            style={{
              marginLeft: '25px',
              fontSize: '40px',
              color: 'rgba(48, 57, 96, 0.2)',
            }}
          >
            <FaHands />
          </span>
        </h6>

        <p
          style={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '16px',
            color: '#002149',
          }}
        >
          Life insurance is a <br />
          combination of caring,
          <br />
          commitment and common
          <br />
          sense
        </p>
        <Link to={{ pathname: '/policy', state: { display: true }}}  style={{ color: '#F88600' }}>
          Enter &gt;&gt;
        </Link>
      </div> */}
    </div>
  );
};

export default DashJsx;

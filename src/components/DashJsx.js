import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { FaHands } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DashJsx = (props) => {
  return (
    <div className='container-fluid' style={{ paddingTop: '3rem' }}>
      <Row>
        <Col md='9'>
          <h2
            style={{
              fontFamily: 'Poppins',
              color: '#1B2036',
              fontWeight: '600',
              fontStyle: 'normal',
            }}
          >
            Hello Confidence!
          </h2>
        </Col>
        <Col md='3'>
          <Link to={{ pathname: '/policy', state: { display: true } }}>
            <Button style={{ backgroundColor: '#F88600' }}>
              {' '}
              +Add Policy{' '}
            </Button>
          </Link>
        </Col>
      </Row>
      <Row style={{ marginTop: '3rem' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
          }}
        >
          {/* Write media query for the width of this card */}
          <div
            style={{
              padding: '1rem',
              width: '100%',
              backgroundColor: 'white',
              boxShadow: '2px 2px 2px 2px #888888',
              borderRadius: '2px',
            }}
            className='card'
          >
            {/* <Row>
              <Col xs={9}>
              <p className="card-title" style={{fontWeight: '600', color: "#002149", fontFamily:"Poppins"}}>Life Insurance</p>
              </Col>
              <Col xs={3}>
                <FaHands style={{color: "rgba(48, 57, 96, 0.2)", fontSize:"50px", paddingRight:"10px"}} />
              </Col>
            </Row> */}
            <p
              className='card-title'
              style={{
                fontWeight: '600',
                fontFamily: 'Poppins',
                fontSize: '20.2074px',
                color: ' rgba(0, 33, 73, 0.5)',
              }}
            >
              Life Insurance{' '}
              <span
                style={{
                  fontSize: '50px',
                  paddingRight: '10px',
                  paddingLeft: '20px',
                }}
              >
                <FaHands style={{ color: 'rgba(48, 57, 96, 0.2)' }} />
              </span>{' '}
            </p>

            <p
              style={{
                color: '#1B2036',
                fontFamily: 'Poppins',
                fontSize: '20px',
                lineHeight: '33px',
              }}
            >
              Plan ₦1,000,000 <br />
              Paid ₦20,000 <br />
              <span style={{ color: '#303960' }}>
                Policy number: 123456789{' '}
              </span>
            </p>

            <Link
              to={{ pathname: '/policy', state: { display: true } }}
              style={{ color: '#F88600' }}
            >
              {' '}
              <p style={{ color: '#F88600' }}>View More &gt;&gt; </p>{' '}
            </Link>
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
          // marginLeft: '30px',
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

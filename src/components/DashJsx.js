import React from 'react';
import { Button } from 'react-bootstrap';
import { FaHands } from 'react-icons/fa';
import { Link } from 'react-router-dom';




const DashJsx = (props) => {
  return (
    <div style={{ margin: '0', padding: '0' }}>
      <div
        style={{
          display: 'flex',
          marginTop: '70px',
          marginLeft: '30px',
          justifyContent: 'space-between',
        }}
      >
        <h4
          style={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '50px',
            lineHeight: '75px',
            color: '#1B2036',
          }}
        >
          Hello Confidence!
        </h4>
        <Link to= {{ pathname: '/policy', state: { display: true }}} >
        <Button style={{ backgroundColor: '#F88600', height:"30px" }}>
          {' '}
          +Add Policy{' '}
        </Button></Link>
        
      </div>

      <div
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
      </div>
    </div>
  );
};

export default DashJsx;

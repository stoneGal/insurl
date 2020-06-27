import React from 'react';
// import { FaHands } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Modals.css';
// import DashJsx from './DashJsx';

const Modals = ({ show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  
  
  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <Link to='/'>
          {' '}
          <Button 
            style={{
              backgroundColor: '#F88600',
              padding: '6px 75px',
              marginBottom: '10px',
              color: '#FFFFFF',
              border: 'none',
              outline: 'none',
              borderRadius: '3px',
            }}
          >
            {' '}
            Done
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Modals;

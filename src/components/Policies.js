import React from 'react';
import DisplayItem from './DisplayItem';
import AddPayment from './AddPayment';

// import { Button } from 'react-bootstrap'






const Policies = (props) => {
  let display = null;

  const state = props.location.state
  if(state){
    display= state.display;
  }
    return (
      <div>
        {/* <Button variant='outline-light' onClick ={props.adDisplay}>
          <h5>
            <span style={{ marginRight: '10px' }}>
              <i className='far fa-list-alt'></i>
            </span>{' '}
            policies
          </h5>
        </Button> */}
        {display ? <AddPayment/> : <DisplayItem/>}
        

        
      </div>
    );
  }


export default Policies;

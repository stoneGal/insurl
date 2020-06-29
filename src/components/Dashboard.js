import React from 'react';
// import { Button } from 'react-bootstrap';
import DashJsx from './DashJsx';


// import { DashJsx } from "./DashJsx"

function Dashboard() {

    
    return (
        <div>
            {/* <Button   variant="outline-light" onClick={props.addItem} >
            <h5><span style={{marginRight:"10px"}}><i className='fas fa-th-list' > </i></span>Dashboard</h5>
            </Button> */}
            <DashJsx />
            {/* {this.state.isAddDisplayState && }  */}
        </div>
    )
}

export default Dashboard;


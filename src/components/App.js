import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsGrid1X2Fill } from 'react-icons/bs';
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs';

import './App.css';
import Dashboard from './Dashboard';
import Setting from './Setting';
import Logout from './Logout';
import Policies from './Policies';
// import Profile from './Profile';
// import Support from './Support';
// import Withdrawal from './Withdrawal';
// import DisplayItem from './DisplayItem';
// import DashJsx from './DashJsx';
// import Modals from './Modals';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { isEmptyState: true }

  //  }

  // triggerDisplay = () => {
  //   this.setState({
  //     ...this.state,
  //     isEmptyState: false,
  //     isAddDisplayState: true
  //   })
  // }

  // state = {
  //   isActive: false
  // };

  // handleShow = () => {
  //   this.setState({ isActive: true });
  // };

  // handleHide = () => {
  //   this.setState({ isActive: false });
  // };

  render() {
    return (
    <div className="container-fluid">
      <Row>
        <Col xs={5} md={3} className='left mx-auto'>
          <div style={{display: 'flex', flexDirection: 'column'}}>
          <h1 className="insurl">Insurl</h1>
          <div style={{marginTop: '2rem'}}>
            <Link to='/' className="link-inactive" style={{display: 'grid', gridTemplateColumns: '1rem 3rem', gridColumnGap: '2px'}}>
            <BsGrid1X2Fill/>
            <p>Dashboard</p>
            </Link>
          </div>
            <div>
              <Link to={{pathname: '/policy', state: { display: false },}} className="link-inactive"  style={{display: 'grid', gridTemplateColumns: '1rem 3rem', gridColumnGap: '2px'}}>
              <BsReverseLayoutTextSidebarReverse/>
              <p>Policies</p>
              </Link>
            </div>
            <div>
              <Link to='/profile' className="link-inactive" style={{display: 'grid', gridTemplateColumns: '1rem 3rem', gridColumnGap: '2px'}}>
              <BsReverseLayoutTextSidebarReverse/>
              <p>Profile</p>
              </Link>
            </div>
            <div>
              <Link to='/profile' className="link-inactive" style={{display: 'grid', gridTemplateColumns: '1rem 3rem', gridColumnGap: '2px'}}>
              <BsReverseLayoutTextSidebarReverse/>
              <p>Withdrawal</p>
              </Link>
            </div>
            <div>
              <Link to='/profile' className="link-inactive" style={{display: 'grid', gridTemplateColumns: '1rem 3rem', gridColumnGap: '2px'}}>
              <BsReverseLayoutTextSidebarReverse/>
              <p>Support</p>
              </Link>
            </div>
            <div>
              <Link to='/profile' className="link-inactive" style={{display: 'grid', gridTemplateColumns: '1rem 3rem', gridColumnGap: '2px'}}>
              <i className='far fa-sun'></i>
              <p>Settings</p>
              </Link>
            </div>
            <div style={{flexBasis: '10rem'}}>
            <div>
              <Link to='/' className="link-inactive" style={{display: 'grid', gridTemplateColumns: '1rem 3rem', gridColumnGap: '2px'}}>
              <i className='fas fa-sign-in-alt'></i>
              <p>Logout</p>
              </Link>
            </div>
            </div>
          </div>
        </Col>

        <Col xs={7} md={9} className='right'>
          <div>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/policy' component={Policies} />
            </Switch>
          </div>
        </Col>
      </Row> 
    </div>
    );
  }
}

export default App;

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
        <div className="container-fluid" >
          <Container fluid>
            <Row >
              <Col xs={5} md={3} className='left'>
                <div className='innercol'>
                  <div className='insurl'>
                    <h1>Insurl</h1>
                  </div>
                  <div className='wrapper'>
                    <div className='dashboard'>
                      {' '}
                      <Button
                        variant='outline-light'
                        style={{ outline: 'none', border: 'none' }}
                      >
                        <Link to='/'>
                          <span className='span'>
                            <BsGrid1X2Fill />
                          </span>{' '}
                          Dashboard
                        </Link>
                      </Button>{' '}
                    </div>
                    <div className='pocilies'>
                      {' '}
                      <Button
                        variant='outline-light'
                        style={{ outline: 'none', border: 'none' }}
                      >
                        <Link
                          to={{
                            pathname: '/policy',
                            state: { display: false },
                          }}
                        >
                          <span className='span'>
                            <BsReverseLayoutTextSidebarReverse />
                          </span>
                          Policies
                        </Link>
                      </Button>{' '}
                    </div>
                    <div className='profile'>
                      <Button
                        variant='outline-light'
                        style={{ outline: 'none', border: 'none' }}
                      >
                        <Link to='/profile'>Profile</Link>
                      </Button>{' '}
                    </div>
                    <div>
                      <Button
                        variant='outline-light'
                        style={{ outline: 'none', border: 'none' }}
                      >
                        <Link to='/withdrawal'>Withdrawal</Link>
                      </Button>{' '}
                    </div>
                    <div>
                      <Link to='/support'> Support</Link>
                    </div>
                    <div>
                      <Setting />
                    </div>
                  </div>
                  <div>
                    <Logout />
                  </div>
                </div>
              </Col>

              <Col xs={7} md={9} className='right' style={{padding:"0",margin:"auto"}}>
                <div className='displayright'>
                  <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/policy' component={Policies} />

                  </Switch>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default App;

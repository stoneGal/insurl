import React from 'react';
import { Button, Row, Col, Card, Dropdown } from 'react-bootstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BsPencil } from 'react-icons/bs';
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './App.css';



export default function AddPayment() {

  const policyPlan = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    color: "rgba(27, 32, 54, 0.5)"
  }
  const cardBody = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "15px",
    lineHeight: "10px",
    color: " #303960"
  }

  const cardsBody = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "40px",
    color: "#F88600"
  }

  const cardBodys = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "15px",
    lineHeight: "50px",
    color: " #303960"
  }

  const sidebyside = {
    // border: "1px solid red",
    marginTop: "140px",
    marginLeft: "0",
    marginRight: "0"
  }


  const splitText = {
    // border: "1px solid green",
    display: "flex"

  }
  const splitText2 = {
    margin: '1px 15px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '25px',
    color: '#F88600',
    border: '1px solid rgba(248, 134, 0, 0.3)',
    backgroundColor: 'rgba(248, 134, 0, 0.3)',
    padding: '4.5px 12px',
    height: '45px',
    width: '45px',
    borderRadius: "50%",
    // alignText: "center"
    // opacity:' 0.5'

  }

  const underText = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '15px',
    color: '#1B2036'
  }
  const textstyle = {
    margin: '1px 2px'
  }
  const DotsVertical = {
    position: 'absolute',
    right: '20px',
    top: "1px"

  }
  const secondText = {
    // border: '1px solid purple',
    marginTop: "30px"
  }

  const basic = {
    backgroundColor: "white",
    border:"none",
    outline:"none",
    cursor:"pointer",
    

  }
  const iconi = {
    color: "black",
    // paddingLeft: "10px",
    fontSize: "18px",

  }

  const bsstyle={
    color: '#F88600',
    padding: '5px'
  }
  const textcard={
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color:" #1B2036"
  }
  const linknowhere={
    textDecoration: 'none'
  }
  const activity={
    marginTop: "30px",
    // border:'1px solid red',
    paddingLeft:"30px"
    
  }
  const log={
    color: 'rgba(48, 57, 96, 0.5)',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px'
  }
  const destyle={
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '17px',
    color:' #303960'
  }

  const subdestyle={
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '12px',
      color:'#303960',
     
  }

  const viewall={
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    color: '#F88600',
    marginTop: "30px",
    // border:'1px solid red',
    // position: "absolute",
    // right:'5px'
    marginLeft: "130px"
  }

  

  return (
    <div className='container-fluid' style={{ paddingTop: '3rem' }}>
      <Row>
        <Col md='9'>
          <h5
            style={{
              fontFamily: 'Poppins',
              color: ' #1B2036',
              fontWeight: 'normal',
              fontStyle: 'normal',
            }}
          >
            Life insurance &gt; Insurance Details
            </h5>
        </Col>
        <Col md='3'>
          <Button style={{ backgroundColor: '#F88600' }}> + Add payment</Button>
        </Col>
      </Row>


      <section>
        <div style={sidebyside}>

          <Row>

            <Col md='4'>
              <p style={policyPlan}>Policy Plan</p>
              <Card style={{ width: '15rem' }}>
                <Card.Body>
                  <Card.Text style={cardBody}>Life Insurance</Card.Text>
                  <Card.Text style={cardsBody}>₦ 1,000, 000</Card.Text>
                  <Card.Text style={cardBodys}> Policy number: 123456789</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md='8' >
              <p style={policyPlan}>Beneficiaries</p>
              <Card className="cards" >


                <Card.Body>
                  <Card.Text>
                    <div style={splitText}>


                      <div className="mb-2" style={DotsVertical}>


                        <Dropdown style={{border:"none", outline:"none"}} >
                          <Dropdown.Toggle id="dropdown-basic" style={basic}>
                            <BsThreeDotsVertical style={iconi} />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                           <Link to="#" style={linknowhere}><Card.Text style={textcard}><span style={bsstyle}><BsPencil /></span> Edit beneficiary </Card.Text></Link> 
                           <Link to="#" style={linknowhere}> <Card.Text style={textcard}><span style={bsstyle}><BsTrash /></span> Delete beneficiary</Card.Text></Link>
                          </Dropdown.Menu>
                        </Dropdown>


                      </div>


                      <div style={splitText2}>J</div>
                      <div style={splitText2}>R</div>
                      <div style={splitText2}>C</div>

                    </div>
                    <p style={underText}><span style={textstyle}>Joy Martins</span><span style={textstyle}>Ruth Martins</span><span style={textstyle}>Collins Martins</span></p>
                  </Card.Text>

                </Card.Body>
              </Card>
            </Col>
          </Row>


        </div>

        <Row>
          <Col md='4'>
            <div style={secondText}>
              <p style={policyPlan}>Total amount paid</p>
              <Card style={{ width: '15rem' }}> 
                <Card.Body> 
                    <Card.Text style={cardBody}>Life Insurance</Card.Text>
                      <Card.Text style={cardsBody}>₦20,000</Card.Text>
                      <Card.Text style={cardBodys}> Date paid: 25/05/2020</Card.Text>
                </Card.Body> 
              </Card>
            </div>
          </Col>

          <Col md= '4'>
            <div style={activity}>
              <p style={log}> Activity log</p>
              <p style={destyle}>Deposit ₦ 10,000 <br/> <span style={subdestyle}>25/05/2020</span></p>
              <p style={destyle}>Deposit ₦ 10,000 <br/> <span style={subdestyle}>24/05/2020</span> </p> 
              <p></p>
            </div>
          </Col>

          <Col md='4'>
            <div>
             <Link> <p style={viewall}>View all </p></Link>
              
            </div>
          </Col>
        </Row>


      </section>





    </div>
  );
}




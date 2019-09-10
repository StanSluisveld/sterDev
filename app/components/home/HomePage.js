import React from 'react';
import {Grid, Row, Col, NavItem} from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import {IndexLinkContainer} from 'react-router-bootstrap';
import Footer from '../common/Footer';

import './HomePage.scss';

class HomePage extends React.Component {
  render() {
    var settings = {
      showStatus: false,
      infiniteLoop: true,
      showThumbs: false,
      autoPlay: true,
      interval: 7500,

    };

   

    return (
      <div className="homePage">
        <Grid>
          <Row className="rowPadding">
          <Carousel {...settings}> 
            <img src="../img/home1.jpg" />
            <img src="../img/home2.jpg" /> 
            </Carousel>  
          </Row>

          <Row className="rowPadding">
            <Col xs={4} >
            <IndexLinkContainer className="link-to" to="/cafetaria">
              <NavItem eventKey={1}>
                  <img className="homepagePictogram" src="../img/cafetariaPictogram.png" />
                  <h3>Cafetaria</h3>
               </NavItem>
              
            </IndexLinkContainer>
            </Col>

            <Col xs={4} >
              <IndexLinkContainer className="link-to" to="/arrangementen">
                <NavItem eventKey={2}
                  ><img className="homepagePictogram" src="../img/eventPictogram.png" /> 
                  <h3>Arrangementen</h3>
                  </NavItem>
                
              </IndexLinkContainer>
            </Col>

            <Col xs={4} >    
              <IndexLinkContainer className="link-to" to="/contact">
                <NavItem eventKey={3}>
                  <img className="homepagePictogram" src="../img/contactPictogram.png" />
                  <h3>Contact</h3>
                  </NavItem>
              </IndexLinkContainer>
            </Col>
          </Row>

          <Row className="rowPadding">
          <Carousel {...settings}> 
            <img src="../img/event1.jpg" />
            <img src="../img/event2.jpg" />
          </Carousel>
          </Row>
        </Grid>
        <Footer />
      </div> 
    );
  }
}

export default HomePage;


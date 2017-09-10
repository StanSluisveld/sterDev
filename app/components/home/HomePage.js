import React from 'react';
import {Grid, Row, Col, NavItem} from 'react-bootstrap';
import Slider from 'react-slick';
import {IndexLinkContainer} from 'react-router-bootstrap';
import Footer from '../common/Footer';

import './HomePage.scss';

class HomePage extends React.Component {
  render() {
    var settings = {
      autoplay: true,
      arrows: false,
      autoplaySpeed: 7500,
      dots: true,
      infinite: true,
      speed: 1000,
    };

    return (
      <div className="homePage">
        <Grid>
          <Row className="rowPadding">
            <Slider {...settings}>
              <img src="../img/sliderPhoto1.jpg" />
              <img src="../img/sliderPhoto2.jpg" />
            </Slider>
          </Row>

          <Row className="rowPadding">
            <Col xs={4} >
            <IndexLinkContainer to="/cafetaria">
              <NavItem eventKey={1}>
                  <img className="homepagePictogram" src="../img/cafetariaPictogram.png" />
                  <h3>Cafetaria</h3>
               </NavItem>
              
            </IndexLinkContainer>
            </Col>

            <Col xs={4} >
              <IndexLinkContainer to="/arrangementen">
                <NavItem eventKey={2}
                  ><img className="homepagePictogram" src="../img/eventPictogram.png" /> 
                  <h3>Arrangementen</h3>
                  </NavItem>
                
              </IndexLinkContainer>
            </Col>

            <Col xs={4} >    
              <IndexLinkContainer to="/contact">
                <NavItem eventKey={3}>
                  <img className="homepagePictogram" src="../img/contactPictogram.png" />
                  <h3>Contact</h3>
                  </NavItem>
              </IndexLinkContainer>
            </Col>
          </Row>

          <Row className="rowPadding">
            <Slider {...settings}>
              <img src="../img/sliderPhoto1.jpg" />
              <img src="../img/sliderPhoto2.jpg" />
            </Slider>
          </Row>
        </Grid>
        <Footer />
      </div> 
    );
  }
}

export default HomePage;


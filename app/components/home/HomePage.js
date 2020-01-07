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

        </Grid>
        <div className="bgContainer">
          <Grid>
            <Row>
              <Col xs={12}>
                <h2>Binnenkort bij de Ster</h2>
              </Col>
            </Row>
            <Row className="rowPadding">
              <Col sm={6} xs={12}>
                <h2 className="subHeading">18 januari 2020 </h2>
                <p>De beste Rock covers brengen we ten gehore, special Tribute to Joe Cocker</p>
                <p>Een band met enkele muzikanten die in het verleden al eens eerder met elkaar muziek hebben gemaakt. Het repertoire van de band bevat het tijdperk van de jaren 60-70, een tijdperk waar musiceren om bezieling ging. Dat is wat de band laat horen met songs van Eric Clapton, Tina Turner, The Free, Golden Earring, Deep Purple,Santana, The Doors, en Joe Cocker, die eens heeft gezegd Never Forget the old ones. De band is met laatst genoemde zeer intensief aan het repeteren om in 2014 klaar te staan om te laten zien en horen wat ze in hun mars hebben.</p>
              </Col>
              <Col sm={6} xs={12}>
                <img src="../img/joecover.jpeg" />
              </Col>
            </Row>
          </Grid>
        </div>
        <Grid>

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


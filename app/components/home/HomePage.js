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
                <h1>Carnaval 2020 bij de Ster</h1>
              </Col>
            </Row>
            <Row className="rowPadding">
              <Col xs={12}>
                <p>Carnaval, HET feest van het jaar! Daar moet jij bij zijn geweest, en waar vier je dat beter als in de Ster in Nieuwkuijk? Precies! Vrijdag gaan wij los met Stuk TV, Tomcio en Dj Stefan de Hart. Zaterdag gaat het feestje maximaal door met Kalvijn en de Doorweekt Dj's! Scoor een combi ticket en betaal maar €10,-! Zo ben jij verzekerd van een onvergetelijke carnaval.</p>
                <p>Kijk voor meer informatie op de agenda of bestel gelijk je tickets bij de ticket pagina!</p>
              </Col>
            </Row>
            <Row className="rowPadding">
              <Col sm={6} xs={12}>
                <img src="../img/carnaval1.jpg" />
               </Col>
              <Col sm={6} xs={12}>
                <img src="../img/carnaval2.jpg" />
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


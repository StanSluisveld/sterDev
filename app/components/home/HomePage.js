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
        {/*<Grid>*/}
        {/*  <Row className="rowPadding">*/}
        {/*  <Carousel {...settings}>*/}
        {/*    <img src="../img/home1.jpg" />*/}
        {/*    <img src="../img/home2.jpg" />*/}
        {/*    </Carousel>*/}
        {/*  </Row>*/}
        {/*</Grid>*/}

          <div className="bgContainer">
            <Grid>
              <Row className="rowPadding">
                <Col xs={12}>
                  <h1 className="center">🚨WIJ GAAN BEZORGEN‼🚨</h1>
                  <p className="center">Omdat de regering besloten heeft dat wij als de Ster moeten sluiten vanwege het corona virus is de cafetaria alleen open om af te halen. Maar niet getreurd wij gaan de verse friet, hamburgers en de snacks ook bij jullie thuis bezorgen🚀!</p>
                  <p className="center">Onze bezorg tijden zijn: <br/>
                    Maandag en dinsdag gesloten <br/>
                    Woensdag van 17.00 tot 20.00 <br/>
                    donderdag van 12.00 tot 20.00 <br/>
                    Vrijdag van 12.00 tot 20.00 <br/>
                    Zaterdag van 12.00 tot 20.00 <br/>
                    Zondag van 16.00 tot 20.00 <br />
                  </p>
                  <p className="center">Voor bestelling belt u naar: <br />
                    ☎:  <a className="orange" href="tel:0735112547">073 511 25 47</a></p>
                </Col>
              </Row>
              <Row className="rowPadding">
                <Col xs={12}>
                  <img src="../img/menu1.jpeg" />
                </Col>
                <Col xs={12}>
                  <img src="../img/menu2.jpeg" />
                </Col>
                <Col xs={12}>
                  <h2 className="center">🚨Nieuw bij de Ster!🚨</h2>
                  <img src="../img/actie2.jpeg" />
                </Col>
              </Row>
            </Grid>
          </div>

        <Grid>
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


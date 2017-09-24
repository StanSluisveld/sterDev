import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './ContactPage.scss';
import Iframe from 'react-iframe';
import { Carousel } from 'react-responsive-carousel';
import Footer from '../common/Footer';


class ContactPage extends React.Component {
  render() {
    var settings = {
      showStatus: false,
      infiniteLoop: true,
      showThumbs: false,
      autoPlay: true,
      interval: 7500,
    };

    return (
      <div className="ContactPage">
        <Grid>
          <Row className="rowPadding">
          <Carousel {...settings}> 
              <img src="../img/sliderPhoto1.jpg" />
              <img src="../img/sliderPhoto2.jpg" />
            </Carousel>
          </Row>
          <Row className="rowPadding">
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2473.30599366824!2d5.178355816110264!3d51.69084527966573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6ecd9f982329f%3A0xee0266c4e907cffc!2sDe+Ster+Party+%26+Events+B.V.!5e0!3m2!1snl!2snl!4v1505051837979"
                width="100%" position="relative" height="450" frameborder="0" style="border:0" allowfullscreen></Iframe>
           </Row>
        </Grid>
        <div className="bgContainer">  
            <Grid>
              <Row>
              <Col sm={12}>
                <h4 className="subHeading">Gratis parkeergelegenheid tegenover de Ster</h4>
              </Col>
              </Row>
              <Row>
                <Col sm={12}>
                <h3>Bezoek ons!</h3>
                 <h4 className="subHeadingOrange">De Ster Nieuwkuijk</h4>
                 <h4 className="subHeadingOrange">Nieuwkuijksestraat 73</h4>
                 <h4 className="subHeadingOrange">5253 AD</h4>
                 <h4 className="subHeadingOrange">Nieuwkuijk</h4>
                <br />
                <br />
                </Col>
              </Row>
              <Row>
              <Col sm={12}>
                <h3>Bel ons!</h3>
                <a href="tel:0735112547"><h4 className="subHeadingOrange">073 511 25 47</h4></a>
                <br />
                <br />
                </Col>
              </Row>
              <Row>
              <Col sm={12}>
                <h3>Mail ons!</h3>
                <a href="mailto:info@sternieuwkuijk.nl"><h4 className="subHeadingOrange">info@sternieuwkuijk.nl</h4></a>
                <a href="mailto:promotie@sternieuwkuijk.nl"><h4 className="subHeadingOrange">promotie@sternieuwkuijk.nl</h4></a>
              </Col>
              </Row>
            </Grid>
        </div>
        <Footer />
      </div>
     
      
    );
  } 
}

export default ContactPage;
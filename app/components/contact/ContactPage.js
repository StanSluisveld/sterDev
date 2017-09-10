import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Slider from 'react-slick';
import './ContactPage.scss';
import Iframe from 'react-iframe';

import Footer from '../common/Footer';


class ContactPage extends React.Component {
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
      <div className="ContactPage">
        <Grid>
          <Row className="rowPadding">
            <Slider {...settings}>
              <img src="../img/sliderPhoto1.jpg" />
              <img src="../img/sliderPhoto2.jpg" />
            </Slider>
          </Row>
          <Row className="rowPadding">
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2473.30599366824!2d5.178355816110264!3d51.69084527966573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6ecd9f982329f%3A0xee0266c4e907cffc!2sDe+Ster+Party+%26+Events+B.V.!5e0!3m2!1snl!2snl!4v1505051837979"
                width="100%" position="relative" height="450" frameborder="0" style="border:0" allowfullscreen></Iframe>
           </Row>
        </Grid>
        <Footer />
      </div>
    );
  } 
}

export default ContactPage;
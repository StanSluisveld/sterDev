import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './AboutPage.scss';
import { Carousel } from 'react-responsive-carousel';
import Footer from '../common/Footer';

class EventPage extends React.Component {
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
                <img src="../img/ster.jpg" />
                <img src="../img/ster.jpg" />
              </Carousel>
            </Row>
            <Row className="rowPadding">
              <Col xs={12}>
                 <h1>Binnenkort meer informatie!</h1>
              </Col>
             </Row>
          </Grid>
        
        {/* <Footer /> */}
        </div>
       
        
      );
    } 
}

export default EventPage;
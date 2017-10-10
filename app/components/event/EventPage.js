import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './AboutPage.scss';
import { Carousel } from 'react-responsive-carousel';
import Footer from '../common/Footer';

class EventPage extends React.Component {

  componentWillMount (){
    const script = document.createElement("script");

    script.src = "https://www.eventics.nl/iframe/js/embed.js";
    script.async = true;

    document.body.appendChild(script);
}


    render() {
      var settings = {
        showStatus: false,
        infiniteLoop: true,
        showThumbs: false,
        autoPlay: true,
        interval: 7500,
      };

      var Eventics = {};
      Eventics.Application = {
          containerId: "shop-iframe",
          channel: "6f59ogwmxktxke5yneczcdz5ll8dinrifdx1l4md",
          width: "auto",
          height: "950"
      }; 
      
      return (
        
        <div className="ContactPage">
     
          <Grid>
            <Row className="rowPadding">
            <Carousel {...settings}> 
                <img src="../img/event1.jpg" />
                <img src="../img/event2.jpg" />
              </Carousel>
            </Row>
            <Row className="rowPadding">
              <Col xs={12}>
                 <h1>Tickets</h1>
                 <div id="shop-iframe"></div>
              </Col>
             </Row>
          </Grid>
        
         <Footer />
        </div>
      );
    }
}



export default EventPage;
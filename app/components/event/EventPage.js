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
                 <iframe src="https://ticketpoint.nl/categorie/de-ster-nieuwkuijk/#frame" width="1140" height="500" frameborder="0"></iframe>
              </Col>
             </Row>
          </Grid>
        
         <Footer />
        </div>
      );
    }
}



export default EventPage;
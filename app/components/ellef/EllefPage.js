import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import Footer from '../common/Footer';
import ReactPixel from 'react-facebook-pixel';

ReactPixel.init('608932913173493');
ReactPixel.pageView();
 

class AboutPage extends React.Component {
  render() {
    var settings = {
      showStatus: false,
      infiniteLoop: true,
      showThumbs: false,
      autoPlay: true,
      interval: 7500,
    };

    ReactPixel.init('608932913173493');
    ReactPixel.pageView();

    return (
      
    
      <div className="ContactPage">
        <Grid>
          <Row className="center-image">
            {/* <Carousel {...settings}>
              <img src="../img/event1.jpg" />
              <img src="../img/event2.jpg" />
            </Carousel> */}
            <img src="../img/ellufbanner.jpeg" />
          </Row>
        </Grid>
        <div className="bgContainer">
        <Grid>
            <Row>
              <Col xs={12}>
                <h1>11 Ster Uren</h1>
              </Col>
            </Row>
            <Row className="rowPadding">
             <Col sm={12} xs={12}>
               <p>Ben jij klaar voor het feest van het jaar? De 11 Ster Uren komt er weer aan en wat hebben wij er zin in!</p>
               <p>Zet 8 februari maar alvast in je agenda want met onder andere Darkraver, Smerrig Diskjochies, DJ crew on tour, Doorweekt en Vieze jack gaan we er weer een super feestje van maken die je echt niet wil missen!</p>
             
              <h2 className="subHeading">Bestel nu je tickets online!</h2>
              <p>Het evenement is op 8 februari 2020 en de deuren zijn vanaf 20:30 geopend tot ongeveer 04:00.</p>
              <p>De minimale leeftijd voor 11 Ster Uren in De Ster Nieuwkuijk is 16 jaar.</p>

              <p><strong>Ticket prijzen:</strong></p>
              <p>Online: €11,15</p>
              <p>Aan de kassa: €16,15</p>
             <p className="orange">ACTIE: Bestel nu 10 Consumptiemunten voor de prijs van 9: €23,05</p>
            <div className="button-container">
              <a href="https://ticketpoint.nl/evenement/11-ster-uren-de-ster/#tickets" target="_blank">BESTEL JOUW TICKETS HIER </a>
            </div>
             </Col>
            </Row>

          </Grid>
        </div>
        <Footer />
      </div>


    );
  }
}

export default AboutPage;
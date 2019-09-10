import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './AboutPage.scss';
import { Carousel } from 'react-responsive-carousel';
import Footer from '../common/Footer';

class AboutPage extends React.Component {
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
        </Grid>
        <div className="bgContainer">
          <Grid>
            <Row className="rowPadding">
              <Col xs={12}>
                <h2>Arrangementen</h2>
                <p>
                  De Ster is weer geopend! In het mooie Nieuwkuijk bieden wij met drie zalen voor elke
                  gelegenheid een perfecte locatie voor al jouw feesten en partijen. Wij zorgen ervoor dat je
                  geheel zonder zorgen kunt genieten van jouw avond of middag. Ons enthousiast personeel
                  staat altijd voor je klaar en serveert de lekkerste hapjes en drankjes. Ook verzorgen wij
                  verschillende buffetten en diners.
           </p>

                <p>De ster biedt 3 sfeervolle zalen, voor elk soort feestje een gepaste ruimte. </p>

                <p className="orange">Freddy’s | Max 75 personen</p>
                <p>De Freddy’s is een industrieel en robuust café. Door het niveauverschil in de vloer, wordt er een perfecte dansvloer gecreëerd! De DJ-booth is al aanwezig en grenst aan de dansvloer. Daarbij is er ruimte voor een rustig plekje naast de dansvloer.</p>
                <br />

                <p className="orange">Pub | Max 120 personen</p>
                <p>De Pub is een langwerpige zaal. Hierdoor ontstaat er een grote dansvloer. De DJ-booth staat al klaar om er een knalfeest van te maken! Een café met een sprekende uitstraling.
                    De pub is gelegen op onze eerste etage. Er is daarom gedacht aan een traplift voor onze mindervalide gasten. Daarbij heeft de Pub een eigen toilet op de eerste etage.</p>
                    <br />

                <p className="orange">Arena | Max 1400 personen</p>
                <p>De Arena is onze grootste zaal. Deze zaal kan ook kleiner gemaakt worden, waardoor deze past bij iedere gelegenheid. De Arena staat garant voor een knalfeest, door de mooie kroonluchter midden in de zaal, sierlijk afgewerkt met doeken. De discolampen toveren de zaal om tot een echte feestzaal!</p>
                <br />

                <p>Nieuwsgierig geworden? Loop eens binnen bij De Ster en wij laten je graag onze verschillende zalen zien. Neem vrijblijvend contact met ons op voor de diverse mogelijkheden.</p>

                <p>Gert-jan van Rooij</p>
                <a href="tel:0735112547" className="orange number">073 511 25 47</a>
                <a href="mailto:info@sternieuwkuijk.nl" className="orange number">info@sternieuwkuijk.nl</a>
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
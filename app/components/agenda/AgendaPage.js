import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
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
            <Row>
              <Col xs={12}>
                <h2>Agenda</h2>
              </Col>
            </Row>
            <Row className="rowPadding">
            <Col sm={6} xs={12}>
                <img src="../img/joecover.jpeg" />
              </Col>
              <Col sm={6} xs={12}>
                <h2 className="subHeading">Joe cover band</h2>
                  <h4>7 maart 2020</h4>
                <p>De beste Rock covers brengen we ten gehore, special Tribute to Joe Cocker</p>
                <p>Een band met enkele muzikanten die in het verleden al eens eerder met elkaar muziek hebben gemaakt. Het repertoire van de band bevat het tijdperk van de jaren 60-70, een tijdperk waar musiceren om bezieling ging. Dat is wat de band laat horen met songs van Eric Clapton, Tina Turner, The Free, Golden Earring, Deep Purple,Santana, The Doors, en Joe Cocker, die eens heeft gezegd Never Forget the old ones. De band is met laatst genoemde zeer intensief aan het repeteren om in 2014 klaar te staan om te laten zien en horen wat ze in hun mars hebben.</p>
              </Col>
            </Row>

            <Row className="rowPadding">
            <Col sm={6} xs={12}>
             </Col>
             <Col sm={6} xs={12}>
               <h2 className="subHeading">DanceQuake Wenny's Shake</h2>
               <h4>14 maart 2020</h4>
               <p>Carpe Diem! Ik word 50! En dat gaan we vieren!!! 🥳🥳🥳</p>
               <p>Hoe en wat precies ga ik nog even goed over nadenken, maar 1 ding weet ik zeker! we gaan knalluuuuuuuh! 🔥🔥🔥🍾</p>
                <p>Voor meer informatie bezoek de <a className="orange" href="https://www.facebook.com/events/654180178459316/" target="_blank">facebookpagina.</a></p>
                <p>Voor tickets <a className="orange" href="https://shop.eventix.io/a71426a0-bf9b-11e9-a90a-e7aae89bc95b/tickets" target="_blank">klik hier</a></p>
             </Col>
            </Row>

            <Row className="rowPadding">
                <Col sm={6} xs={12}>
                    <img src="../img/henk.jpeg" />
                </Col>
                <Col sm={6} xs={12}>
                    <h2 className="subHeading">Hart voor muziek</h2>
                    <h4>22 maart 2020</h4>
                    <p>De eerstvolgende reguliere opnamedag van Hart voor Muziek vindt plaats op zondagmiddag 22 maart aanstaande in Nieuwkuijk bij de Ster met uiteraard weer tal van TOPPERS van eigen bodem.
                        Zo is Henk Bernard deze middag onze artiest van de maand. De rest van de line-up volgt spoedig.</p>
                    <p>Kaarten zijn nu al te koop bij Cafetaria de Ster in Nieuwkuijk en
                        Top1 Toys van der Ven in Vlijmen of <a className="orange" href="https://www.fp2000.nl/entreekaarten" target="_blank">bestel ze hier online</a>. De entree bedraagt 12.50 euro per persoon vanaf 12 jaar.
                        Zien we jou ook deze middag?!</p>
                        </Col>
            </Row>

            <Row className="rowPadding">
                <Col sm={6} xs={12}>
                    <h2 className="subHeading">PPM Band</h2>
                    <h4>28 maart 2020</h4>
                    <p>De PPM Band: (on)Gewoon Gezellig! Zo kun je de PPM band het beste omschrijven. Waar ze ook komen het is altijd feest met een vet gouden rand! Ze zijn niet de zoveelste hipste/coolste/ubervette/megaflexe coverband. Nee, zij zijn gewoon leuk, gezellig en interactief. Ze spelen alles, vaak in razend tempo en ook op verzoek via SMS. Ze hebben karaoke, dans-acts en nemen vele extra’s mee! En ze kunnen elk repertoire en publiek aan en spelen avondvullend. Ze hebben geen voorgeprogrammeerde sets en kunnen zich dus aanpassen (en dat doen ze ook!). Dit maakt dat het altijd (altijd!) een ongewoon goed en gezellig feest wordt.</p>
                    <p>Voor tickets en meer informatie <a className="orange" href="https://ticketpoint.nl/evenement/ppm-band-ster-nieuwkuijk/" target="_blank">klik hier</a></p>
                     </Col>
                <Col sm={6} xs={12}>
                    <img src="../img/ppm.jpeg" />
                </Col>
            </Row>

            <Row className="rowPadding">
            <Col sm={6} xs={12}>
               <img src="../img/fancafe.jpeg" />
             </Col>
             <Col sm={6} xs={12}>
               <h2 className="subHeading">TV Opnames Fan Cafe</h2>
               <h4>5 april 2020</h4>
               <p>TV Opnames Fan Cafe</p>
               <p>Met o.a:</p>
               <p>Charelle, Henk Bernard, Elz Bakker, Django Wagner, Jaman, Henk Damen</p>
               <p>William Burg, Joey Kramer, Spang, Wendy Rivers</p>
               <p>Willem Barth, Bob Visser, Frank Verkooijen</p>
               <p>En vele anderen…</p>
               <p>De complete line up volgt zsm!</p>

                <p>Voor tickets en meer informatie <a className="orange" href="https://www.eventbrite.nl/e/tickets-fan-cafe-tv-opnames-86337111625" target="_blank">klik hier</a></p>
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

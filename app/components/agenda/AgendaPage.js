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
               <h2 className="subHeading">DanceQuake New Years Shake</h2>
               <h4>31 december 2019</h4>
               <p>Beleef de meest fantastische jaarwisseling en join DanceQuake New Years Shake!</p>
               <p>DanceQuake Events nodigt je uit voor het meest gezellige oudejaarsfeest in Nederland!
                We hebben een machtige line-up weten te boeken en in deze speciale editie wordt alles natuurlijk sprankelend aangekleed om jullie een onvergetelijke jaarwisseling te bezorgen! </p>
                <p>Voor meer informatie bezoek de <a className="orange" href="https://www.facebook.com/events/2554174834632983/" target="_blank">facebookpagina.</a></p>
                <p>Voor tickets <a className="orange" href="https://shop.eventix.io/3bcea390-bf9e-11e9-b900-e913ca0d7845/tickets" target="_blank">klik hier</a></p>
             </Col>
             <Col sm={6} xs={12}>
               {/* <img src="../img/pietenkoor.jpg" /> */}
             </Col>
            </Row>

            <Row className="rowPadding">
            <Col sm={6} xs={12}>
                <img src="../img/joecover.jpeg" />
              </Col>
              <Col sm={6} xs={12}>
                <h2 className="subHeading">7 maart 2020</h2>
                <p>De beste Rock covers brengen we ten gehore, special Tribute to Joe Cocker</p>
                <p>Een band met enkele muzikanten die in het verleden al eens eerder met elkaar muziek hebben gemaakt. Het repertoire van de band bevat het tijdperk van de jaren 60-70, een tijdperk waar musiceren om bezieling ging. Dat is wat de band laat horen met songs van Eric Clapton, Tina Turner, The Free, Golden Earring, Deep Purple,Santana, The Doors, en Joe Cocker, die eens heeft gezegd Never Forget the old ones. De band is met laatst genoemde zeer intensief aan het repeteren om in 2014 klaar te staan om te laten zien en horen wat ze in hun mars hebben.</p>
              </Col>

            </Row>

            <Row className="rowPadding">
            <Col sm={6} xs={12}>
             <h2 className="subHeading">DanceQuake Valentine</h2>
               <h4>15 feb 2020</h4>
               <p>DanceQuake Valentine's Edition</p>
               <p>Omdat we niet zonder liefde kunnen!</p>
               <p>Met alweer een machtige line-up! <br />
                  Deze maand:<br />
                  👉 DES SANTOS<br />
                  👉 KO-C<br />
                  👉 MISS J.<br />
                  👉 MICHAEL MESS</p>
                <p>Voor meer informatie bezoek de <a className="orange" href="https://www.facebook.com/events/403312940318500/" target="_blank">facebookpagina.</a></p>
                <p>Voor tickets <a className="orange" href="https://shop.eventix.io/0dce3bf0-ec2c-11e9-854d-8fadb793397d/tickets" target="_blank">klik hier</a></p>
             </Col>
            <Col sm={6} xs={12}>
               {/* <img src="../img/pietenkoor.jpg" /> */}
             </Col>
            </Row>

            <Row className="rowPadding">
            <Col sm={6} xs={12}>
               {/* <img src="../img/pietenkoor.jpg" /> */}
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

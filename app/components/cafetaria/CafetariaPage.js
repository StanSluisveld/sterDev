import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import {IndexLinkContainer} from 'react-router-bootstrap';
import Scrollspy from 'react-scrollspy';
import Footer from '../common/Footer';
import './AboutPage.scss';

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
      <div className="AboutPage">
        <Grid>
        <Row className="rowPadding">
        <Carousel {...settings}> 
            <img src="../img/ijs.jpg" />
            <img src="../img/foto2.jpg" />  
            <img src="../img/sliderPhoto1.jpg" />  
            <img src="../img/sparerib.jpg" />  
          </Carousel>
        </Row>

        <Row className="rowPadding">
          <Scrollspy items={ ['info', 'actie', 'bestellen']} className="icons"  >
            <Col xs={4} >
        
                <a href="#info">
                  <img className="homepagePictogram" src="../img/info.png" />
                  <h3>Info</h3>
                </a>
            </Col>

            <Col xs={4} >
                <a href="#actie">
                  <img className="homepagePictogram" src="../img/actie.png" /> 
                  <h3>Actie</h3>
                </a>    
            </Col>

            <Col xs={4} >   
                <a href="#bestellen"> 
                  <img className="homepagePictogram" src="../img/bestellen.png" />
                  <h3>Bestellen</h3>
                </a>
            </Col>
          </Scrollspy>
        </Row>
        </Grid>

        <div className="bgContainer">
        <Grid>
          <Row className="rowPadding" id="info" >
            <Col xs={10}>
            <h2>Cafetaria, Plaza</h2>
            <p>
              Naast feesten en partijen kun je bij De Ster ook terecht voor een lekkere hap. 
              De Ster werkt samen met Foodketen Plaza, Food for all. Bij Plaza krijg je waar voor je geld. Complete menu’s, met niet alleen maar frites en snacks. Maar zeker ook luxe gerechten, altijd geserveerd met verse salade. Plaza is niet zomaar een cafetaria. Uiteraard vind je bij ons alle bekende lekkere snacks, knapperige frites en lekkere menu’s. Maar Plaza heeft meer. Wij verrassen je graag met verse, ambachtelijke foodconcepten. Zo lekker krijg je het nergens anders! 
            </p>
            </Col>
          </Row>

          <Row className="rowPadding">
            <Col xs={10}>
            <h2 className="subHeading">Openingstijden </h2>
            <p>
                Het gehele jaar:<br />
                Maandagen gesloten<br />
                Dinsdag tot en met zondag van 12:00 tot 21:00u geopend<br /><br />
                Met de feestdagen zijn wij geopend vanaf 15:00 tot 20:00u<br /><br />
                
                Evenement tijden worden onder evenementen getoond  
            </p>  
            </Col>
          </Row>

          <span className="divider"></span>

          <Row className="rowPadding" id="actie">
            <Col xs={10}>
          <h2>Menu</h2>
           <p>
              <a href="../img/menukaart-jan.pdf" target="_blank" className="orange"> Klik op de deze link voor het menu te bekijken/downloaden</a>  
           </p>  
            </Col>
          </Row>

          <span className="divider"></span>

          <Row className="rowPadding" id="actie">
            <Col xs={10}>
          <h2>Acties</h2>
           <p>
           Sparen<br />
            Vaste klanten kunnen profiteren van extra veel voordeel! Met de Plaza spaarsleutel spaar je snel en eenvoudig voor korting. Want bij besteding van iedere €3,50 ontvang je een punt op jouw spaarsleutel. Wanneer je 25 punten hebt gespaard kun je deze verzilveren en korting ontvangen! 
            <br />
            Heb je nog geen spaarsleutel? Deze kun je bij ons ophalen. 
            <br />
            <br />
Benieuwd naar de acties van deze maand?  <br />
<a href="https://www.plazafoodforall.nl/actiefolder/" target="_blank" className="orange"> Klik op de deze link voor de actiefolder. </a>  
           </p>  
            </Col>
          </Row>

          <span className="divider"></span>

          <Row className="rowPadding" id="bestellen">
            <Col xs={10}>
            <h2>Bestellen</h2>
            <p>
            Wil je graag iets van te voren bestellen. Dat kan telefonisch via telefoonnummer <span className="orange">073-5112547.</span><br />
            <br /> <br />
            Wil je een bestelling doen voor meer dan 20 personen geef dit dan tijdig door. Heb je  vragen of opmerkingen over jouw bestelling? Geef ons dan een belletje <span className="orange">073-5112547.</span> 
            <br /> <br />
            Bedrijven<br />
            Wij begrijpen dat je tijdens werktijd niet altijd tijd hebt om jouw bestelling op te komen halen. Daarom bieden we voor bestellingen boven de €25,- een bezorgservice.  <br /><br />
            <a href="../img/bestelkaart.pdf" target="_blank" className="orange"> Klik op de deze link om het bestelformulier te bekijken/downloaden</a>  

 
 
  
            </p>  
            
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
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
            <img src="../img/ster.jpg" />
            <img src="../img/sliderPhoto2.jpg" />
            <img src="../img/sliderPhoto1.jpg" />    
          </Carousel>
        </Row>

        <Row className="rowPadding">
          <Scrollspy items={ ['info', 'tijden', 'vacature']} className="icons"  >
            <Col xs={4} >
                
                <a href="#info">
                  <img className="homepagePictogram" src="../img/info.png" />
                  <h3>De Ster info</h3>
                </a>
            </Col>

            <Col xs={4} >
                <a href="#tijden">
                  <img className="homepagePictogram" src="../img/openingstijden.png" /> 
                  <h3>Openingstijden</h3>
                </a>    
            </Col>

            <Col xs={4} >   
                <a href="#vacature"> 
                  <img className="homepagePictogram" src="../img/vacature.png" />
                  <h3>Vacatures</h3>
                </a>
            </Col>
          </Scrollspy>
        </Row>
        </Grid>
        
        <div className="bgContainer">
        <Grid>
          <Row className="rowPadding" id="info" >
            <Col xs={10}>
            <h2>De Ster info</h2>
            <p>
            De Ster Nieuwkuijk is gevestigd in de Nieuwkuijksestraat, tegenover de kerk. <br /> 
            Er is altijd wat te doen bij De Ster Nieuwkuijk. Zo kan je bij ons terecht voor een bakje koffie met een lekker borreltje van het huis, maar ook voor een heerlijke lunch of lekkere hap. 
            <br /> <br /> 
            Naast de cafetaria bieden de zalen ruimte voor het geven van feesten, partijen en 
            vergaderingen. Heb je zelf iets te vieren of wil je een zaal huren neem dan <IndexLinkContainer to="/contact"><a className="link" eventKey={4}> contact </a></IndexLinkContainer> met ons op of kijk voor informatie op <IndexLinkContainer to="/contact"><a className="link" eventKey={5}> arrangementen </a></IndexLinkContainer>.  
            </p>
            </Col>
          </Row>

          <Row className="rowPadding">
            <Col xs={12}>
            <h2 className="subHeading">Huisreglement </h2>
            <p>
                Op het terrein en in het gebouw van De Ster Nieuwkuijk, is onderstaand reglement van kracht. Door het betreden van het terrein of het gebouw van De Ster verklaart u zich met dit reglement bekend en daarmee akkoord en verbindt u zich vrijwillig tot volledige naleving daarvan.

                <p className="orange">Parkeren & Parkeerterrein</p> 
                Het parkeerterrein is gelegen tegenover De Ster. Dit parkeerterrein is van de gemeente Heusden en openbaar en gratis te gebruiken. Het vernielen van het parkeerterrein of het achter laten van vuil kan beboet worden. 
              <ul>
                <li>Het parkeerterrein mag voor geen ander doeleinde worden gebruikt dan waarvoor het is bestemd.</li>
              <li> De maximumsnelheid op het parkeerterrein bedraagt 10 km/u.</li>
              <li> Parkeren van auto’s, motor of (brom)fiets geschiedt geheel op eigen risico. De directie aanvaardt geen enkele aansprakelijkheid bij diefstal, verlies, vernieling of beschadiging.</li>
              </ul>
                <p className="orange">Toegang</p>
                De Ster dient voortdurend veiligheidsmaatregelen te treffen om de openbare orde en de veiligheid van de bezoekers zoveel mogelijk te waarborgen. Na overleg met politie, justitie en de lokale overheid is door de leiding van De Ster besloten tot maatregelen om de ongelimiteerde aanwas van risicogroepen te beperken en zodoende de veiligheid te waarborgen. Zodra de omvang van een groep of spanningen daartoe aanleiding geven, zal vanaf dat moment aan potentiële leden van dergelijke groepen de toegang tot het uitgaanscentrum worden geweigerd.  
                <ul>
                  <li>Cafetaria is voor alle leeftijden toegankelijk. </li>
                  <li>Uitsluitend personen van 16 jaar en ouder hebben toegang tot het uitgaanscentrum. Mits de leeftijdgrens van 		desbetreffende zalen of evenementen anders wordt aangegeven.</li> 
                  <li>Wanneer u als minderjarige toch online tickets besteld voor een evenement. Dan krijgt u bij weigering in geen 		gevallen uw geld terug. </li>
                  <li>Elke toezichthouder / bijzondere opsporingsambtenaar of overheidsfunctionaris dient zich na binnentreden 		van De Ster direct bij de bedrijfsleiding / directie te legitimeren. Art. 5:12 Algemene wet Bestuursrecht.</li> 
                  <li>Correcte kleding is in en om De Ster verplicht, indien u niet voldoet aan onze norm behouden wij ons het recht 		voor om de toegang te weigeren. Trainingspakken, hoofddeksels en haatdragende kleding zijn niet toegestaan.</li> 
                  <li>U mag zich in en om De Ster niet schuldig maken aan ongewenste intimiteiten, racisme en aan discriminatie.</li>  
                  <li>Bij het betreden van het uitgaanscentrum verklaart u zich akkoord met visitatie van uw bagage en onderzoek		aan kleding. </li>
                  <li>Bent u in kennelijk staat van dronkenschap of onder invloed van drugs dan wordt de toegang ontzegd. </li>
                  <li>In bewaring gegeven goederen / zaken worden max. 2 weken bewaard, waarna zij zullen worden vernietigd. </li>
                  <li>U mag eigendommen van De Ster niet mee naar buiten nemen. Dat geldt ook voor glazen, flessen of lege				blikjes.</li>
                  <li>Bent u uw eigendom kwijtgeraakt in De Ster, meld dit dan aan de directie. De Ster is niet aansprakelijk hier			voor. </li>
                  <li>Vindt u iets waarvan uw denkt dat dit een ander toebehoord breng dit dan naar de directie. </li>
                  <li>Veroorzaak geen overlast of geluidsoverlast in en om De Ster. </li>
                  <li>Bij constatering van niet-naleving van dit reglement, waarbij uw betrokkenheid wordt vermoed, verbindt u 			zich nu reeds voor alsnog om op de eerste verzoek van onze portier / toezichthouder met hem mee te gaan 			naar een daarvoor bestemde ruimte. Waar u over het betreffende geval kunt worden gehoord en eventueel 			een foto van u ter identificatie kan worden gemaakt. </li>
                  <li>Bij gebleken niet nakoming van enige bepaling uit dit reglement kan u de toegang, voor een bepaalde periode, 		worden geweigerd of ontzegd. </li>
                  <li>Voor uw en onze veiligheid zijn onze portiers / toezichthouders belast met de controle op de naleving van dit 		reglement. </li>
                  <li>Zij treden op namens de directie en zijn derhalve bevoegd tot het geven van aanwijzingen aan u als bezoeker,		welke door u dienen te worden opgevolgd. </li>
                  <li>Beslissingen van de portier zijn bindend. </li>
                  <li> Constatering van strafbare feiten wordt te alle tijde bij de politie vermeld.</li>
                </ul>

                <p className="orange">Alcohol en rookbeleid</p> 
                Het is niet toegestaan aan personen jonger dan 18 jaar drank of rookartikelen te gebruiken. Aan personen van 18 jaar en ouder is dit wel toegestaan. Mocht een persoon ouder dan 18 jaar, drank of rookartikelen verstrekken aan een persoon jonger dan 18 jaar en is hij/zij berokkend daarmee schade in welke vorm dan ook, aan De Ster, dan zal deze schade worden verhaald op de betreffende personen. Personen van 18 jaar en ouder krijgen bij binnenkomst van het uitgaanscentrum op vertoon van een geldig identiteitskaart een polsbandje. Op vertoon van dit bandje wordt drank versterkt. Roken mag alleen op de daarvoor aangegeven plekken. 

                <p className="orange">Wapens en drugs</p>
                Het bij zich hebben van wapens en of munitie (vernoemd is het wapenwet) of voorwerpen die als wapen kunnen dienen zijn in en bij De Ster ten strengste verboden. 
                Het bezit of gebruik van alle vormen, soorten en hoeveelheden van drugs is bij en in De Ster ten strengste verboden. Indien u in het bezit blijkt te zijn van wapens en of drugs worden deze goederen direct op eerste verzoek door u aan ons afgegeven en wordt e.e.a. afgehandeld conform de instructie en/of richtlijnen van politie en justitie 

                <p className="orange">Camera’s</p> 
                Voor uw en onze veiligheid houden wij mede toezicht door middel van camera’s in geval val calamiteiten zullen de opgenomen beelden gebruikt worden ter identificatie. 

                <p className="orange">EHBO</p>
                Indien u hulp wenst van de EHBO van De Ster, dient u de aanwijzingen van de dienstdoende hulpverlener strikt op te volgen. 
                De directie aanvaardt geen enkele aansprakelijkheid voor kwetsuren welke zijn veroorzaakt middels geweld door eigen toedoen of toegebracht door derden, niet zijnde personeel van De Ster, of die welke het directe of indirecte gevolg zijn van het gebruik van alcohol of drugs 

                <p className="orange">Klachten</p>
                Om zoveel mogelijk uw prettig en veilig verblijf in De Ster te waarborgen, worden ieders gedragingen getoetst aan de inhoud van dit reglement. Mocht u toch klachten hebben over de toepassing daarvan door ons personeel, dan kunt u daarmee terecht bij de directie.  
            </p>
           
            
            </Col>
          </Row>

          <span className="divider"></span>

          <Row className="rowPadding" id="tijden">
            <Col xs={12}>
          <h2>Openingstijden</h2>
           <p>
              Cafetaria:<br />
              Zomertijd<br />
              Maandagen gesloten<br />
              Dinsdag tot en met zondag van 12:00 tot 22:00u geopend<br />
          </p>
          <p> 
              Wintertijd<br />
              Maandagen gesloten<br />
              Dinsdag tot en met zondag van 12:00 tot 21:00u geopend<br /><br />
              
              Met de feestdagen zijn wij geopend vanaf 15:00 tot 20:00u<br /><br />
              
              Evenement tijden worden onder evenementen getoond  
           </p>  
            </Col>
          </Row>

          <span className="divider"></span>

          <Row className="rowPadding" id="vacature">
            <Col xs={12}>
            <h2>Vacature</h2>
            <p>
              Heb jij altijd al in de horeca willen werken en zie jij het wel zitten om met ons een nieuwe uitdaging aan te gaan? Dan is dit je kans! Wij zijn namelijk op zoek naar enthousiaste gezellige kroegtijgers en frituur masters die ons team komen versterken!
              Wat zoeken wij en wat bieden wij? 
              Wij zijn altijd op zoek naar horeca pareltjes die in ons team passen.

              Wat je van ons kan verwachten?
             <ul>
                 <li>Heel veel gezelligheid</li>
                <li>De leukste personeelsfeesten</li> 
                <li>Een fijn en stabiel team</li>
                <li> Goed salaris</li>
                <li> Flexibele roosters</li>
               <li>  Afwisselend werk</li>
             </ul>
              Wat wij van jou verwachten?
               <ul>
                  <li>16 jaar of ouder</li>
                  <li>Een positieve mindset </li>
                  <li>Klantvriendelijkheid</li>
                  <li>Initiatief tonend </li>
                  <li>Onder druk presteren</li>
                  <li>Je vind het niet erg om (afwisselend)'s-avonds en in weekenden te werken</li>
                  <li>Per direct beschikbaar</li>
                  <li>Woonachtig in gemeente Heusden</li>
               </ul>

              Spreekt dit je allemaal wel aan? Neem dan contact met ons op of stuur je CV en motivatiebrief naar 
              <a href="mailto:info@sternieuwkuijk" className="orange"> info@sterieuwkuijk.nl </a> en wie weet hoor jij binnenkort bij ons team!
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
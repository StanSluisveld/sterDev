import React from 'react';
import {IndexLink} from 'react-router';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem, Grid, Row, Col} from 'react-bootstrap';
import './Header.scss';

class Header extends React.Component {
  render() {

    return (
      <div className="Header">
        <div className="topHeader">
          <Grid>
            <Row>
                <Col sm={4} className="hidden-sm" className="hidden-xs" >
                  <div className="topContact">
                    <span>
                      <div>Nieuwkuijksestraat 73</div>
                      <div>5253 AD Nieuwkuijk</div>
                      <a href="tel:0735112547" className="orange number">073 511 25 47</a>
                      <a href="mailto:info@sternieuwkuijk.nl" className="orange number">info@sternieuwkuijk.nl</a>
                    </span>
                  </div>
                </Col>

                <Col sm={4} xs={6} >
                <IndexLink to="">
                  <div className="logoDeSter">
                    <img src='..\img\logo-de-ster-nieuwkuijk.png' className="img-responsive" />
                  </div>
                 </IndexLink> 
                </Col>

                <Col sm={4} xs={6} >
                <div className="topSocial">
                      <p>Di tot Zo geopend van</p>
                      <p>12:00 - 21:00</p>
                      <div className="social">
                          <a href="https://www.facebook.com/sternieuwkuijk/" target="_blank" className="facebook"></a>
                          <a href="https://www.instagram.com/de_ster_official" target="_blank" className="instagram"></a>
                      </div> 
                  </div>
                </Col>  
            </Row>
          </Grid>   
        </div>
        
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <IndexLinkContainer to="/">
                <NavItem eventKey={1}>Home</NavItem>  
              </IndexLinkContainer>

              <LinkContainer to="/overons">
                <NavItem eventKey={2}>Over ons</NavItem>
              </LinkContainer>

              <LinkContainer to="/arrangementen">
                <NavItem eventKey={3}>Arrangementen</NavItem>
              </LinkContainer>

              <LinkContainer to="/cafetaria">
                <NavItem eventKey={4}>Cafetaria</NavItem>
              </LinkContainer>

              <LinkContainer to="/evenementen">
                <NavItem eventKey={5}>Tickets</NavItem>
              </LinkContainer>

              <LinkContainer to="/contact">
                <NavItem eventKey={6}>Contact</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
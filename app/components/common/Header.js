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
                <Col sm={4}>
                <img src='../img/home.contant.pictorgram-03-03.png' />
                </Col>

                <Col sm={4}>
                <h1>hoi</h1>
                </Col>

                <Col sm={4}>
                <h1>hoi</h1>
                </Col>  
            </Row>
          </Grid>
        </div>
        
        <Navbar>
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
                <NavItem eventKey={5}>Evenementen</NavItem>
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
import React from 'react';
import {Grid, Row, Col, NavItem} from 'react-bootstrap';

import './Footer.scss';

class Footer extends React.Component {
    render() {
      return (
        <div className="footer">  
            <Grid>
                <h1 className="footerh1">COPYRIGHT TEKST</h1>
            </Grid>
        </div>
      );
    }
  }
  
  export default Footer;
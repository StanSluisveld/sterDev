import React from 'react';
import {Grid, Row, Col, NavItem} from 'react-bootstrap';

import './Footer.scss';

class Footer extends React.Component {
    render() {
      return (
        <div className="footer">  
            <Grid>
                <p className="copyright">&copy; De Ster Nieuwkuijk</p>
            </Grid>
        </div>
      );
    }
  }
  
  export default Footer;
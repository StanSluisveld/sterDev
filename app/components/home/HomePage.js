import React from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import './HomePage.scss';

class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <Grid>
          <Row>
            <Col sm={6}>
              <Panel header="Panel 1">
                <p>Content </p>
                <p>Content B</p>
              </Panel>
            </Col>
            <Col sm={6}>
              <Panel header="Panel 2">
                <p>Content A</p>
                <p>Content B</p>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default HomePage;
import React from 'react'
import { Panel, Row, Col, Thumbnail } from 'react-bootstrap'
import AboutMe from './AboutMe';
import AboutWebsite from './AboutWebsite';

const title = (
  <h3>About This Website</h3>
);

const jumbotronInstance = (
    <div style={{ padding: 20 }}>
      <h1>Welcome to my website!</h1>
      <p>This is a simple crawler practice website!</p>
      <Row>
        <Col md={4}>
          <Thumbnail src='https://i.imgur.com/dR5WL8u.png'>
            <AboutMe />
          </Thumbnail>
        </Col>
        <Col md={8}>
          <Panel header={title}  bsStyle="info">
            <AboutWebsite />
          </Panel>
        </Col>
      </Row>
    </div>
);

const About = () => (
  <div style={{textAlign: 'left'}}>
    { jumbotronInstance }
  </div>
)

export default About
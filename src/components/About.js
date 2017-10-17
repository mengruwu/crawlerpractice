import React from 'react'
import { Jumbotron, Panel} from 'react-bootstrap'
import AboutMe from './AboutMe';
import AboutWebsite from './AboutWebsite';

const title1 = (
  <h3>About Me</h3>
);

const title2 = (
  <h3>About This Website</h3>
);

const divStyle = {
  textAlign: 'left',
  padding: 30
}

const jumbotronInstance = (
  <Jumbotron>
    <div style={ divStyle }>
      <h1>Welcome to my website!</h1>
      <p>This is a simple crawler practice website!</p>
      <Panel header={title1}  bsStyle="success">
        <AboutMe />
      </Panel>
      <Panel header={title2}  bsStyle="info">
        <AboutWebsite />
      </Panel>
    </div>
  </Jumbotron>
);

const About = () => (
  <div>
    { jumbotronInstance }
  </div>
)

export default About
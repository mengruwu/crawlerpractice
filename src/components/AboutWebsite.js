import React from 'react'
import { Thumbnail, Col } from 'react-bootstrap'

const desp = {
    music: (
        <p>Crawl the newest ranking from KKBOX, the most famous music company in Asia.<br />
        After collecting data, sort it into a table and display it clearly.
        </p>),
    beauty: (
            <p>Crawl pictures from PTT Beauty, the most well-know forum in Taiwan.<br />
            In my website, you can click the photos and link to original article.<br />
            You have no need to browse all the article tilte and watch all the photos.</p>
    ),
    weather: (<p>Coming soon...</p>)
};

const AboutWebsite = () => (
    <div>
        <Col md={4}>
            <Thumbnail src='https://i.imgur.com/MT8Q6ce.jpg' alt='Beauty-icon'>
                <h3>Beauty Crawler</h3>
                { desp.beauty }
            </Thumbnail>
        </Col>
        <Col md={4}>
            <Thumbnail src='https://i.imgur.com/jtZCpDq.jpg' alt='Music-icon'>
                <h3>Music Crawler</h3>
                { desp.music }
            </Thumbnail>
        </Col>
        <Col md={4}>
            <Thumbnail src='https://i.imgur.com/Z5pf0Bz.jpg' alt='Weather-icon'>
                <h3>Weather Crawler</h3>
                { desp.weather }
            </Thumbnail>
        </Col>
    </div>
);

export default AboutWebsite
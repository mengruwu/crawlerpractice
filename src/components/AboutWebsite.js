import React from 'react'
import { Thumbnail, Col } from 'react-bootstrap'

import beauty from './assets/beauty300.png'
import music from './assets/music300.png'
import weather from './assets/weather300.png'

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
            <Thumbnail src={ beauty } alt='Beauty-icon'>
                <h3>Beauty Crawler</h3>
                { desp.beauty }
            </Thumbnail>
        </Col>
        <Col md={4}>
            <Thumbnail src={ music } alt='Music-icon'>
                <h3>Music Crawler</h3>
                { desp.music }
            </Thumbnail>
        </Col>
        <Col md={4}>
            <Thumbnail src={ weather } alt='Weather-icon'>
                <h3>Weather Crawler</h3>
                { desp.weather }
            </Thumbnail>
        </Col>
    </div>
);

export default AboutWebsite
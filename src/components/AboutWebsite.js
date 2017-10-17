import React from 'react'
import { Media, Image } from 'react-bootstrap'

const desp = {
    music: (<p>Crawl the newest ranking from KKBOX, the most famous music company in Asia.</p>),
    beauty: (<div>
            <p>Crawl pictures from PTT Beauty, the most well-know forum in Taiwan.</p>
            <p>In my website, you can click the photos and link to original article.</p>
            <p> You have no need to browse all the article tilte and watch all the photos.</p>
        </div>),
    weather: (<p>Coming soon...</p>)
};

const divStyle = {
    padding: 20
};

const AboutWebsite = () => (
    <div style={ divStyle }>
        <Media>
        <Media.Left align='middle'>
        <Image width={75} height={75} src={'https://i.imgur.com/3Ebg7r6.png'} alt='Music-icon'/>
        </Media.Left>
        <Media.Body>
        <Media.Heading><h3>Music Crawler</h3></Media.Heading>
        { desp.music }
        </Media.Body>
        </Media>
        <Media>
        <Media.Left align='middle'>
        <Image width={75} height={75} src={'https://i.imgur.com/fCDkkVF.png'} alt='Beauty-icon'/>
        </Media.Left>
        <Media.Body>
        <Media.Heading><h3>Beauty Crawler</h3></Media.Heading>
        { desp.beauty }
        </Media.Body>
        </Media>
        <Media>
        <Media.Left align='middle'>
        <Image width={75} height={75} src={'https://i.imgur.com/J5ZKkwr.png'} alt='Music-player'/>
        </Media.Left>
        <Media.Body>
        <Media.Heading><h3>Weather Crawler</h3></Media.Heading>
        { desp.weather }
        </Media.Body>
        </Media>
    </div>
);

export default AboutWebsite
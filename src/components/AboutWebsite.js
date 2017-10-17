import React from 'react'
import { Media, Image } from 'react-bootstrap'

const desp = (
    <p>Description</p>
);

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
        { desp }
        </Media.Body>
        </Media>
        <Media>
        <Media.Left align='middle'>
        <Image width={75} height={75} src={'https://i.imgur.com/fCDkkVF.png'} alt='Beauty-icon'/>
        </Media.Left>
        <Media.Body>
        <Media.Heading><h3>Beauty Crawler</h3></Media.Heading>
        { desp }
        </Media.Body>
        </Media>
        <Media>
        <Media.Left align='middle'>
        <Image width={75} height={75} src={'https://i.imgur.com/J5ZKkwr.png'} alt='Music-player'/>
        </Media.Left>
        <Media.Body>
        <Media.Heading><h3>Weather Crawler</h3></Media.Heading>
        { desp }
        </Media.Body>
        </Media>
    </div>
);

export default AboutWebsite
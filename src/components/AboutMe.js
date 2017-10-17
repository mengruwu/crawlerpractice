import React from 'react'
import { Media, Image } from 'react-bootstrap'

const divStyle = {
    padding: 10
};

const myLife = (
    <div style={ divStyle }>
        <p>I graduated earlier from NTHU(National Tsing-Hua University). 2013Sept.-2017Fub.</p>
        <p>I major in Computer Science. Have lots of fun in learning program language.</p>
        <p>Now I am learning ReactJS myself and trying to find a job fitting me.</p>
        <p>Please feel free to contact me : ray7102ray7102@gmail.com</p>
    </div>
);

const AboutMe = () => (
    <div style={ divStyle }>
        <Media>
        <Media.Left align='middle'>
        <Image width={150} height={150} src={'https://i.imgur.com/1gp43Pq.png'} alt='Me' circle/>
        </Media.Left>
        <Media.Body>
        <Media.Heading><h3>Hi ! Nice to meet you !</h3></Media.Heading>
        { myLife }
        </Media.Body>
        </Media>
    </div>
);

export default AboutMe
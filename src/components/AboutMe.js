import React from 'react'

const divStyle = {
    padding: 10
};

const myLife = (
    <p>I graduated earlier from NTHU (National Tsing-Hua University 2013Sep - 2017Feb).
    I major in Computer Science. Have lots of fun in learning programming.
    Now I am learning ReactJS myself and improving my crawling skill.
    My back-end system uses NodeJS and cheerio to implement my server.<br/>
    Please feel free to contact me : ray7102ray7102@gmail.com</p>
);

const AboutMe = () => (
    <div style={ divStyle }>
    <h3>About Me</h3>
    { myLife }
    </div>
);

export default AboutMe
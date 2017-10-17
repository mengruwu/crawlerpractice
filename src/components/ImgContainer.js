import React from 'react';

const list = {
    beauty: <img src="https://i.imgur.com/PsGadXZ.png?1" alt="beauty" title="source: imgur.com" />,
    music: <img src="https://i.imgur.com/jtZCpDq.jpg" alt="music" title="source: imgur.com" />,
    weather: <img src="https://imgur.com/Z5pf0Bz.jpg" alt="weather" title="source: imgur.com" />
}
const ImgContainer = (props) => (
    list[props.name]
)

export default ImgContainer
import React from 'react';

import beauty from './assets/beauty2.png'
import music from './assets/music2.jpg'
import weather from './assets/weather2.png'

const list = {
    beauty: <img src={ beauty } alt="beauty" />,
    music: <img src={ music } alt="music" />,
    weather: <img src={ weather } alt="weather" />
}
const ImgContainer = (props) => (
    list[props.name]
)

export default ImgContainer
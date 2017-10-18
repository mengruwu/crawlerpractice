import React from 'react'
import { Carousel } from 'react-bootstrap';
import ImgContainer from './ImgContainer';
import { LinkContainer } from 'react-router-bootstrap';

const content = {
  music: (<p>Easy to know Ranking.</p>),
  beauty: (<p>Big picture to browse and enjoy yourself.</p>),
  weather: (<p>Supply you weather forecast in Taiwan. Coming soon...</p>)
}

const carouselInstance = (
  <Carousel>
    <LinkContainer to='/music'>
      <Carousel.Item>
        <ImgContainer name="music"/>
        <Carousel.Caption>
          <h3>Music</h3>
          { content.music }
        </Carousel.Caption>
      </Carousel.Item>
    </LinkContainer>
    <LinkContainer to='/beauty'>
      <Carousel.Item>
        <ImgContainer name="beauty"/>
        <Carousel.Caption>
          <h3>Beauty</h3>
          { content.beauty }
        </Carousel.Caption>
      </Carousel.Item>
    </LinkContainer>
    <Carousel.Item>
      <ImgContainer name="weather"/>
      <Carousel.Caption>
        <h3>Weather</h3>
        { content.weather }
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

const Home = () => (
  <div align='center'>
    { carouselInstance }
  </div>
)

export default Home
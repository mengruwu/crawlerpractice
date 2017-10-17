import React from 'react'
import { Carousel, PageHeader } from 'react-bootstrap';
import ImgContainer from './ImgContainer';

const content = {
  music: (<p>Easy to know Ranking</p>),
  beauty: (<p>Big picture to browse and enjoy yourself</p>),
  weather: (<p>Supply you weather forecast in Taiwan</p>)
}

const carouselInstance = (
  <Carousel>
    <Carousel.Item>
      <ImgContainer name="music"/>
      <Carousel.Caption>
        <h3>Music</h3>
        { content.music }
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <ImgContainer name="beauty"/>
      <Carousel.Caption>
        <h3>Beauty</h3>
        { content.beauty }
      </Carousel.Caption>
    </Carousel.Item>
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
    <PageHeader><small>Contact me : ray7102ray7102@gmail.com</small>
    </PageHeader>
  </div>
)

export default Home
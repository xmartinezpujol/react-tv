import React from 'react';

import CarouselHero from '../components/CarouselHero';

import { HeroSlides } from '../mocks/HeroSlides';
import Carousel from '../components/Carousel';
import List from '../components/List';

import View from "../components/View";

class HomePage extends React.Component {
  render() {
    const dimensions = {
      xs: { w: 310, h: 210 },
      sm: { w: 310, h: 210 },
      md: { w: 385, h: 260 },
      lg: { w: 385, h: 260 },
    };
    return (
      <div id="home-page">
        <div className="page">
          <CarouselHero
            height={444}
            slides={HeroSlides}
            imgWidth={1920}
          />
          <Carousel
            isLoading={false}
            numCards={9}
            dimensions={dimensions}
            duration={600}
          >
            <List
              dimensions={dimensions}
            />
          </Carousel>
          <Carousel
            isLoading={false}
            numCards={9}
            dimensions={dimensions}
            duration={600}
          >
            <List
              dimensions={dimensions}
            />
          </Carousel>
        </div>
      </div>
    );
  }
}

export default HomePage;

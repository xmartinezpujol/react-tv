import React from 'react';
import glamorous from 'glamorous';

import { HeroSlides } from '../mocks/HeroSlides';

import CarouselHero from '../components/CarouselHero';
import View from '../components/View';
import MovieList from '../containers/MovieList';

const Categories = [
  'populares-en-taquilla',
  'estrenos-para-toda-la-familia',
  'estrenos-imprescindibles-en-taquilla',
  'estrenos-espanoles',
  'si-te-perdiste',
  'especial-x-men',
  'nuestras-preferidas-de-la-semana',
];

const dimensions = {
  xs: { w: 140, h: 190 },
  sm: { w: 140, h: 190 },
  md: { w: 200, h: 290 },
  lg: { w: 200, h: 290 },
};

const HomeContainer = glamorous(View)({
  position: 'relative',
});

const HomePage = () => (
  <HomeContainer direction="column">
    <CarouselHero
      height={window.innerWidth > 992 ? 444 : 150}
      slides={HeroSlides}
      imgWidth={1920}
    />
    {Categories.map((cat, index) => (
      <MovieList
        key={cat}
        id={index}
        cardSize={dimensions}
        listName={cat}
      />
    ))}
  </HomeContainer>
);

export default HomePage;

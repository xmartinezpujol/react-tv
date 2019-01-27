import React from 'react';

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
  xs: { w: 200, h: 290 },
  sm: { w: 200, h: 290 },
  md: { w: 200, h: 290 },
  lg: { w: 200, h: 290 },
};

const HomePage = () => (
  <View direction="column" type="night" style={{ padding: '70px 0px' }}>
    <CarouselHero
      height={444}
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
  </View>
);

export default HomePage;

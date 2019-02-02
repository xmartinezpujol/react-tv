import React from 'react';
import glamorous from 'glamorous';

import Carousel from '../../components/Carousel';
import Cast from '../../components/Cast';
import Icon from '../../components/Icon';
import Text from '../../components/Text';
import View from '../../components/View';

const Container = glamorous(View)({
  position: 'relative',
  marginBottom: 20,
});

const dimensions = {
  xs: { w: 100, h: 150 },
  sm: { w: 100, h: 150 },
  md: { w: 100, h: 150 },
  lg: { w: 100, h: 150 },
};


const Actors = props => (
  <Container direction="column">
    <View align="center" style={{ marginBottom: 10 }}>
      <Icon
        size={14}
        name="group"
        font="fa"
        style={{ marginRight: 5 }}
      />
      <Text
        type="p1"
        style={{
          fontSize: 17,
          fontWeight: 700,
          margin: 0,
        }}
      >
        Dirección y reparto
      </Text>
    </View>
    <Carousel
      numCards={props.actors}
      dimensions={dimensions}
      duration={600}
      whiteNav
    >
      <Cast
        data={props.actors}
        dimensions={dimensions}
      />
    </Carousel>
  </Container>
);

export default Actors;

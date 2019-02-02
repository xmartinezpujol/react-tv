import React from 'react';
import glamorous from 'glamorous';

import { Link } from 'react-router-dom';

import Text from './Text';
import View from './View';

import { COLOR_PALETTE } from '../Constants';

const PLACEHOLDER_PHOTO = 'https://prod1-kraken-cloudfront.rakuten.tv/images/placeholders/cast/positive-4a94b4434c.png';

const Overlay = glamorous.div({
  position: 'absolute',
  transition: 'all 0.3s ease',
  height: '100%',
  width: '100%',
  zIndex: 1,
  borderRadius: 3,
  backgroundImage: 'linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0) 50%,rgba(0,0,0,.85) 100%)',
  ':hover': {
    opacity: 0.8,
    boxShadow: `inset 0px 0px 0px 4px ${COLOR_PALETTE.yellow}`,
  },
});

const CardWrapper = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  margin: 3,
  borderRadius: 3,
  transition: '0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)',
  ':hover': {
    cursor: 'pointer',
  },
});

const Card = glamorous.div(
  {
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    borderRadius: 3,
    border: 0,
    transform: 'translateY(0px)',
    transition: '0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)',
  },
  props => ({
    height: props.dimensions.lg.h,
    minWidth: props.dimensions.lg.w,
    maxWidth: props.dimensions.lg.w,
    backgroundImage: `url(${props.url})`,
    marginRight: props.last ? 100 : 0,
    '@media(max-width: 1200px)': {
      height: props.dimensions.md.h,
      minWidth: props.dimensions.md.w,
      maxWidth: props.dimensions.md.w,
    },
    '@media(max-width: 992px)': {
      height: props.dimensions.sm.h,
      minWidth: props.dimensions.sm.w,
      maxWidth: props.dimensions.sm.w,
    },
    '@media(max-width: 767px)': {
      height: props.dimensions.xs.h,
      minWidth: props.dimensions.xs.w,
      maxWidth: props.dimensions.xs.w,
    },
  }),
);

const Cast = props => (
  <React.Fragment>
    {props.data.map((item, index) => (
      <CardWrapper key={item.id}>
        <Link
          href="/"
          to={`/actor/${item.id}`}
        >
          <Card
            url={item.photo !== null ? item.photo : PLACEHOLDER_PHOTO}
            dimensions={props.dimensions}
            last={index === props.data.length - 1}
          >
            <Overlay />
          </Card>
        </Link>
        <View
          direction="row"
          justify="center"
          align="center"
          style={{
            padding: 5,
            marginRight: index === props.data.length - 1 ? 100 : 0,
          }}
        >
          <Text
            type="p1"
            style={{
              margin: 0,
              textAlign: 'center',
              fontSize: 12,
            }}
          >
            {item.name}
          </Text>
        </View>
      </CardWrapper>
    ))}
  </React.Fragment>
);

export default Cast;

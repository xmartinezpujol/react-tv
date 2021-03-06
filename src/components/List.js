import React from 'react';
import glamorous from 'glamorous';

import { Link } from 'react-router-dom';

import Text from './Text';
import View from './View';

import { COLOR_PALETTE } from '../Constants';

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
  borderRadius: 5,
  transition: '0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)',
  ':hover': {
    cursor: 'pointer',
  },
});

const Card = glamorous.div(
  {
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    borderRadius: 5,
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

const Icon = glamorous.i({
  fontSize: 12,
  marginRight: 3,
});

const List = props => (
  <React.Fragment>
    {props.data.map((item, index) => (
      <CardWrapper key={item.id}>
        <Link
          className={`movie-link card-${item.id}`}
          href="/"
          to={`/movie/${item.id}`}
        >
          <Card
            url={item.images.artwork}
            dimensions={props.dimensions}
            last={index === props.data.length - 1}
          >
            <Overlay />
          </Card>
        </Link>
        {typeof (item.highlighted_score) !== 'undefined' &&
        <View
          direction="row"
          justify="center"
          style={{
            marginRight: index === props.data.length - 1 ? 100 : 0,
          }}
        >
          <View
            direction="row"
            justify="center"
            align="center"
            style={{ padding: 5 }}
          >
            <Icon
              className="fa fa-star"
              style={{ color: 'yellow' }}
            />
            <Text
              type="p1"
              style={{
                color: 'yellow',
                margin: 0,
                fontWeight: 500,
                fontSize: 14,
              }}
            >
              {item.highlighted_score.score}
            </Text>
          </View>
          <View
            direction="row"
            justify="center"
            align="center"
            style={{ padding: 5 }}
          >
            <Icon
              className="fa fa-user"
              style={{ color: 'white' }}
            />
            <Text
              type="p1"
              style={{
                color: 'white',
                margin: 0,
                fontWeight: 500,
                fontSize: 14,
              }}
            >
              {item.highlighted_score.formatted_amount_of_votes}
            </Text>
          </View>
        </View>
        }
      </CardWrapper>
    ))}
  </React.Fragment>
);

export default List;

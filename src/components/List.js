import React from 'react';
import glamorous from 'glamorous';

import { Events } from '../mocks/Events';

const Overlay = glamorous.div({
  position: 'absolute',
  transition: 'all 0.3s ease',
  height: '100%',
  width: '100%',
  zIndex: 1,
  backgroundImage: 'linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0) 50%,rgba(0,0,0,.85) 100%)',
});

const EventInfo = glamorous.div({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: 10,
});

const EventListTitle = glamorous.span(
  {
    color: '#36424a',
    fontSize: 18,
    lineHeight: 2,
    fontWeight: 900,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  props => ({
    maxWidth: `calc(${props.dimensions.lg.w}px - 28px)`,
    '@media(max-width: 1200px)': {
      maxWidth: `calc(${props.dimensions.md.w}px - 28px)`,
    },
    '@media(max-width: 992px)': {
      maxWidth: `calc(${props.dimensions.sm.w}px - 28px)`,
    },
    '@media(max-width: 767px)': {
      maxWidth: `calc(${props.dimensions.xs.w}px - 28px)`,
    },
  }),
);

const EventListVenueTitle = glamorous.span(
  {
    color: '#6e7a83',
    fontSize: 16,
    lineHeight: 1.2,
    marginBottom: 4,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  props => ({
    maxWidth: `calc(${props.dimensions.lg.w}px - 28px)`,
    '@media(max-width: 1200px)': {
      maxWidth: `calc(${props.dimensions.md.w}px - 28px)`,
    },
    '@media(max-width: 992px)': {
      maxWidth: `calc(${props.dimensions.sm.w}px - 28px)`,
    },
    '@media(max-width: 767px)': {
      maxWidth: `calc(${props.dimensions.xs.w}px - 28px)`,
    },
  }),
);

const EventListCardWrapper = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  margin: 3,
  borderRadius: 5,
  transition: '0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)',
  ':hover': {
    cursor: 'pointer',
  },
});

const EventListCard = glamorous.div(
  {
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    borderRadius: 5,
    border: 0,
    transform: 'translateY(0px)',
    transition: '0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)',
    ':hover': {
      opacity: 0.8,
    },
  },
  props => ({
    height: props.dimensions.lg.h * 0.6,
    minWidth: props.dimensions.lg.w,
    maxWidth: props.dimensions.lg.w,
    backgroundImage: `url(${props.url})`,
    '@media(max-width: 1200px)': {
      height: props.dimensions.md.h * 0.6,
      minWidth: props.dimensions.md.w,
      maxWidth: props.dimensions.md.w,
    },
    '@media(max-width: 992px)': {
      height: props.dimensions.sm.h * 0.6,
      minWidth: props.dimensions.sm.w,
      maxWidth: props.dimensions.sm.w,
    },
    '@media(max-width: 767px)': {
      height: props.dimensions.xs.h * 0.6,
      minWidth: props.dimensions.xs.w,
      maxWidth: props.dimensions.xs.w,
    },
  }),
);

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleSelect(eventId) {
    this.setState(() => ({
      selected: eventId,
    }));
  }

  handleFavorite(e) {
    e.stopPropagation();
    alert('Favorite me in API');
  }

  render() {
    return (
      <React.Fragment>
        {Events.map(event => (
          <EventListCardWrapper key={event.id}>
            <EventListCard
              onClick={() => this.handleSelect(event.id)}
              url={event.cover}
              dimensions={this.props.dimensions}
            >
              <Overlay />
            </EventListCard>
            <EventInfo>
              <EventListTitle dimensions={this.props.dimensions}>
                {event.name}
              </EventListTitle>
              <EventListVenueTitle dimensions={this.props.dimensions}>
                {event.venue}
              </EventListVenueTitle>
            </EventInfo>
          </EventListCardWrapper>
        ))}
      </React.Fragment>
    );
  }
}

export default List;

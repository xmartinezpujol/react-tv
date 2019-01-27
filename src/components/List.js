import React from 'react';
import glamorous from 'glamorous';

const Overlay = glamorous.div({
  position: 'absolute',
  transition: 'all 0.3s ease',
  height: '100%',
  width: '100%',
  zIndex: 1,
  backgroundImage: 'linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0) 50%,rgba(0,0,0,.85) 100%)',
});

const CardWrapper = glamorous.div({
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

const Card = glamorous.div(
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
    height: props.dimensions.lg.h,
    minWidth: props.dimensions.lg.w,
    maxWidth: props.dimensions.lg.w,
    backgroundImage: `url(${props.url})`,
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

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventId) {
    this.setState(() => ({
      selected: eventId,
    }));
  }

  render() {
    return (
      <React.Fragment>
        {typeof (this.props.data) !== 'undefined' && this.props.data.contents.data.map(item => (
          <CardWrapper key={item.id}>
            <Card
              onClick={() => this.handleSelect(item.id)}
              url={item.images.artwork}
              dimensions={this.props.dimensions}
            >
              <Overlay />
            </Card>
          </CardWrapper>
        ))}
      </React.Fragment>
    );
  }
}

export default List;

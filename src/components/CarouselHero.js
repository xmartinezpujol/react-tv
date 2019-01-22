import React from 'react';
import ReactDOM from 'react-dom';
import glamorous from 'glamorous';

import { COLOR_PALETTE } from '../Constants';

const HeroImage = glamorous.img({
  objectFit: 'cover',
  minWidth: '100vw',
});

const Carousel = glamorous.div(
  {
    display: 'flex',
    overflow: 'hidden',
    '@media(max-width: 992px)': {
      overflow: 'auto',
    },
  },
  props => ({
    height: props.height ? props.height : 444,
  }),
);

const Arrow = glamorous.i({
  transition: 'all 0.6s ease',
  cursor: 'pointer',
  ':hover': {
    color: COLOR_PALETTE.consumer,
  },
});

const ArrowNavPrev = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  zIndex: 100,
  color: '#FFF',
  background: 'linear-gradient(to right,rgba(0,0,0,.95) 0,transparent 100%)',
  height: 444,
  left: 0,
  paddingLeft: 20,
  fontSize: 60,
  '@media(max-width: 992px)': {
    display: 'none',
  },
});

const ArrowNavNext = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  zIndex: 100,
  color: '#FFF',
  background: 'linear-gradient(to left,rgba(0,0,0,.95) 0,transparent 100%)',
  height: 444,
  right: 0,
  paddingRight: 20,
  fontSize: 60,
  '@media(max-width: 992px)': {
    display: 'none',
  },
});

class CarouselHero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numSlides: this.props.slides.length,
      curSlide: 0,
    };
    this.handleSlideMove = this.handleSlideMove.bind(this);
  }

  handleSlideMove(e, direction) {
    e.preventDefault();
    switch (direction) {
      case 'left':
        if (this.state.curSlide !== 0) {
          this.setState(() => ({
            curSlide: this.state.curSlide - 1,
          }));
          // Scroll Component to Left 100% Window offset
          setTimeout(() => {
            ReactDOM.findDOMNode(this).scrollLeft -= window.innerWidth;
          }, 100);
        } else {
          this.setState(() => ({
            curSlide: this.state.numSlides - 1,
          }));
          // Scroll Component to the end
          setTimeout(() => {
            ReactDOM.findDOMNode(this).scrollLeft += window.innerWidth * (this.state.numSlides - 1);
          }, 100);
        }
        break;
      case 'right':
        if (this.state.curSlide !== this.state.numSlides - 1) {
          this.setState(() => ({
            curSlide: this.state.curSlide + 1,
          }));
          // Scroll Component to Right 100% Window offset
          setTimeout(() => {
            ReactDOM.findDOMNode(this).scrollLeft += window.innerWidth;
          }, 100);
        } else {
          this.setState(() => ({
            curSlide: 0,
          }));
          // Scroll Component back to Slide 0
          setTimeout(() => {
            ReactDOM.findDOMNode(this).scrollLeft = 0;
          }, 100);
        }
        break;
      default:
    }
  }

  render() {
    return (
      <Carousel
        className="hero-container"
        style={{ animation: 'fadeIn 3s' }}
        height={this.props.height}
        ref={(heroContext) => { this.heroContext = heroContext; }}
        id="hero-carousel"
      >
        <ArrowNavPrev className="nav-slide nav-prev">
          <Arrow
            onClick={e => this.handleSlideMove(e, 'left')}
            className="fa fa-angle-left"
          />
        </ArrowNavPrev>
        {this.props.slides.map((slide, index) => (
          <HeroImage
            key={index}
            src={slide.imageUrl[`w_${this.props.imgWidth}`]}
          />
        ))}
        <ArrowNavNext className="nav-slide nav-next">
          <Arrow
            onClick={e => this.handleSlideMove(e, 'right')}
            className="fa fa-angle-right"
          />
        </ArrowNavNext>
      </Carousel>
    );
  }
}

export default CarouselHero;


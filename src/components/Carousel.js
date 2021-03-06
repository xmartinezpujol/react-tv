import React from 'react';
import ReactDOM from 'react-dom';
import glamorous from 'glamorous';
import * as glamor from 'glamor';

import { COLOR_PALETTE } from '../Constants';

import Loader from './Loader';

const smoothScrollTo = (element, target, duration) => {
  target = Math.round(target);
  duration = Math.round(duration);
  if (duration < 0) {
    return Promise.reject('bad duration');
  }
  if (duration === 0) {
    element.scrollLeft = target;
    return Promise.resolve();
  }

  const startTime = Date.now();
  const endTime = startTime + duration;

  const startLeft = element.scrollLeft;
  const distance = target - startLeft;

  const smoothStep = (start, end, point) => {
    if (point <= start) { return 0; }
    if (point >= end) { return 1; }
    const x = (point - start) / (end - start); // interpolation
    return x * x * (3 - (2 * x));
  };

  return new Promise((resolve, reject) => {
    // This is to keep track of where the element's scrollTop is
    // supposed to be, based on what we're doing
    let previousLeft = element.scrollLeft;

    // This is like a think function from a game loop
    const scrollFrame = () => {
      if (element.scrollLeft !== previousLeft) {
        // reject('interrupted');
        return;
      }

      // set the scrollLeft for this frame
      const now = Date.now();
      const point = smoothStep(startTime, endTime, now);
      const frameLeft = Math.round(startLeft + (distance * point));
      element.scrollLeft = frameLeft;

      // check if we're done!
      if (now >= endTime) {
        resolve();
        return;
      }

      // If we were supposed to scroll but didn't, then we
      // probably hit the limit, so consider it done; not
      // interrupted.
      if (element.scrollLeft === previousLeft
        && element.scrollLeft !== frameLeft) {
        resolve();
        return;
      }
      previousLeft = element.scrollLeft;

      // schedule next frame for execution
      setTimeout(scrollFrame, 0);
    };

    // boostrap the animation process
    setTimeout(scrollFrame, 0);
  });
};

const fadeIn = glamor.css.keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const SelectorWrapper = glamorous.div({
  position: 'relative',
  display: 'flex',
  overflow: 'hidden',
  animation: `${fadeIn} 1s ease forwards`,
  '@media(max-width: 992px)': {
    overflow: 'auto',
  },
});

const LoaderContainer = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 257,
});

const Arrow = glamorous.i({
  transition: 'all 0.6s ease',
  cursor: 'pointer',
  ':hover': {
    color: COLOR_PALETTE.consumer,
  },
});

const ArrowNavPrev = glamorous.div(
  {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 100,
    color: '#FFF',
    height: '100%',
    top: 0,
    left: 0,
    paddingLeft: 20,
    textShadow: '0 0 3px rgba(0,0,0,.8)',
    fontSize: 60,
    '@media(max-width: 992px)': {
      display: 'none',
    },
  },
  props => ({
    background: props.whiteNav
      ? 'linear-gradient(to right,rgba(255,255,255,.95) 0,transparent 100%)'
      : 'linear-gradient(to right,rgba(0,0,0,.95) 0,transparent 100%)'
    ,
  }),
);

const ArrowNavNext = glamorous.div(
  {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 100,
    color: '#FFF',
    height: '100%',
    top: 0,
    right: 0,
    paddingRight: 20,
    textShadow: '0 0 3px rgba(0,0,0,.8)',
    fontSize: 60,
    '@media(max-width: 992px)': {
      display: 'none',
    },
  },
  props => ({
    background: props.whiteNav
      ? 'linear-gradient(to left,rgba(255,255,255,.95) 0,transparent 100%)'
      : 'linear-gradient(to left,rgba(0,0,0,.95) 0,transparent 100%)'
    ,
  }),
);

const CarouselContainer = glamorous.div({
  position: 'relative',
  overflow: 'hidden',
});

const scrollTo = (element, direction, cardsWidth, duration) => {
  if (direction === 'left') {
    smoothScrollTo(element, element.scrollLeft - cardsWidth, duration);
  }
  if (direction === 'right') {
    smoothScrollTo(element, element.scrollLeft + cardsWidth, duration);
  }
};

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleSlideMove = this.handleSlideMove.bind(this);
    this.initCarousel('start');
  }

  componentWillReceiveProps(newProps) {
    if (newProps.numCards !== this.props.numCards) {
      this.initCarousel('update', newProps);
    }
  }

  initCarousel(event, newProps) {
    let cardWidth;
    let maxSlides;
    const { dimensions, fullWidthMode, numCards } = event === 'start' ? this.props : newProps;

    switch (true) {
      case window.innerWidth >= 1200:
        cardWidth = dimensions.lg.w;
        break;
      case (window.innerWidth >= 992 && window.innerWidth < 1200):
        cardWidth = dimensions.md.w;
        break;
      case (window.innerWidth >= 768 && window.innerWidth < 992):
        cardWidth = dimensions.sm.w;
        break;
      case window.innerWidth < 768:
        cardWidth = dimensions.xs.w;
        break;
      default:
        break;
    }

    // fullWidthMode takes always windowWidth
    if (fullWidthMode) {
      maxSlides = Math.trunc((window.innerWidth / (cardWidth + 6)));
    } else { // Default mode takes container width
      maxSlides = Math.trunc((
        (window.innerWidth >= 1430 ? 1430 : window.innerWidth) / (cardWidth + 6)));
    }
    const maxSlideMoves = Math.trunc((numCards / maxSlides));

    if (event === 'start') {
      this.state = {
        curSlide: 0,
        maxSlideMoves,
        maxSlides,
        cardWidth,
      };
    } else {
      this.setState(() => ({
        curSlide: 0,
        maxSlideMoves,
        maxSlides,
        cardWidth,
      }));
    }
  }

  handleSlideMove(e, direction, refEventSelector) {
    const { cardWidth, maxSlides, maxSlideMoves } = this.state;
    e.preventDefault();
    switch (direction) {
      case 'left':
        if (this.state.curSlide !== 0) {
          scrollTo(ReactDOM.findDOMNode(refEventSelector), 'left', (cardWidth + 6) * maxSlides, this.props.duration);
          this.setState(() => ({
            curSlide: this.state.curSlide - 1,
          }));
        }
        break;
      case 'right':
        if (this.state.curSlide !== maxSlideMoves) {
          scrollTo(ReactDOM.findDOMNode(refEventSelector), 'right', (cardWidth + 6) * maxSlides, this.props.duration);

          this.setState(() => ({
            curSlide: this.state.curSlide + 1,
          }));
        }
        break;
      default:
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.props.isLoading &&
        <LoaderContainer>
          <Loader color="yellow" />
        </LoaderContainer>
        }
        {!this.props.isLoading &&
          <CarouselContainer>
            {this.state.curSlide !== 0 &&
              <ArrowNavPrev whiteNav={this.props.whiteNav}>
                <Arrow
                  onClick={e => this.handleSlideMove(e, 'left', this.EventSelector)}
                  className="fa fa-angle-left"
                />
              </ArrowNavPrev>
            }
            <SelectorWrapper ref={ref => this.EventSelector = ref}>
              {this.props.children}
            </SelectorWrapper>
            {(this.state.maxSlideMoves === null ||
              this.state.curSlide !== this.state.maxSlideMoves) &&
              <ArrowNavNext whiteNav={this.props.whiteNav}>
                <Arrow
                  onClick={e => this.handleSlideMove(e, 'right', this.EventSelector)}
                  className="fa fa-angle-right"
                />
              </ArrowNavNext>
            }
          </CarouselContainer>
        }
      </React.Fragment>
    );
  }
}

export default Carousel;

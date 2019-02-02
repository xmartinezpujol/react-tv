import React from 'react';
import glamorous from 'glamorous';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Loader from '../components/Loader';
import View from '../components/View';

import Actions from './containers/Actions';
import Actors from './components/Actors';
import Languages from './components/Languages';
import MovieStats from './components/MovieStats';
import Sinopsis from './components/Sinopsis';

import Text from '../components/Text';
import Carousel from '../components/Carousel';
import List from '../components/List';

import * as movieActions from './../redux/modules/movie';
import * as recommendationsActions from './../redux/modules/recommendations';

const MovieContainer = glamorous(View)({
  backgroundColor: '#F1F1F1',
});

const LoaderContainer = glamorous.div({
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: '#101010',
  zIndex: 9999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

const Card = glamorous(View)({
  padding: 20,
  border: '1px solid #d9d9d9',
  borderTop: 'none',
  '@media(min-width: 1140px)': {
    width: '75%',
  },
  '@media(max-width: 1140px)': {
    order: 2,
    width: '100%',
  },
});

const dimensions = {
  xs: { w: 200, h: 290 },
  sm: { w: 200, h: 290 },
  md: { w: 200, h: 290 },
  lg: { w: 200, h: 290 },
};

const RecommendationsContainer = glamorous(View)({
  position: 'relative',
  paddingLeft: 20,
});

const Hero = glamorous(View)(
  {
    backgroundSize: 'cover',
    height: 655,
    width: '100%',
  },
  props => ({
    backgroundImage: `url(${props.imageUrl})`,
  }),
);

const Overlay = glamorous(View)({
  position: 'absolute',
  zIndex: 1,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(to bottom,transparent 50%,rgba(0,0,0,.15) 60%,rgba(0,0,0,.5) 70%,rgba(0,0,0,.7) 80%,#000 100%)',
});

const Main = glamorous(View)({
  padding: '0px 20px 20px 20px',
  flexDirection: 'row',
  '@media(max-width: 1140px)': {
    flexDirection: 'column',
  },
});

class MoviePage extends React.Component {
  componentWillMount() {
    this.props.dispatch(movieActions.fetchMovie(this.props.match.params.id));
    this.props.dispatch(recommendationsActions.fetchRecommendations(this.props.match.params.id));
  }

  componentWillReceiveProps(newProps) {
    if (newProps.location.pathname !== this.props.location.pathname) {
      this.props.dispatch(movieActions.fetchMovie(newProps.match.params.id));
      this.props.dispatch(recommendationsActions.fetchRecommendations(newProps.match.params.id));
    }
  }

  componentWillUnmount() {
    this.props.dispatch(movieActions.resetMovie());
    this.props.dispatch(recommendationsActions.resetRecommendations());
  }

  render() {
    const { data, isFetching } = this.props.movie;
    return (
      <MovieContainer direction="column">
        {isFetching &&
          <LoaderContainer>
            <Loader color="yellow" />
          </LoaderContainer>
        }
        {!isFetching &&
          <View direction="column">
            <View direction="column" style={{ position: 'relative' }}>
              <Overlay />
              <Hero imageUrl={data.images.snapshot} />
            </View>
            <Main>
              <Card direction="column" type="purewhite">
                <MovieStats data={data} />
                <Sinopsis
                  highlight={data.highlight}
                  plot={data.plot}
                />
                <Actors actors={data.actors} />
                <Languages streams={data.view_options.private.streams} />
              </Card>
              <Actions
                movieId={data.id}
                movieName={data.title}
              />
            </Main>
          </View>
        }
        <RecommendationsContainer direction="column" type="night">
          <Text type="h2.w" >
            Otras películas que te pueden gustar
          </Text>
          <Carousel
            isLoading={this.props.recommendations.isFetching}
            numCards={typeof (this.props.recommendations.data) !== 'undefined' ? this.props.recommendations.data.length : 9}
            dimensions={dimensions}
            duration={600}
            data={this.props.recommendations.data}
          >
            <List
              data={this.props.recommendations.data}
              dimensions={dimensions}
            />
          </Carousel>
        </RecommendationsContainer>
      </MovieContainer>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie,
  recommendations: state.recommendations,
});

export default withRouter(connect(mapStateToProps)(MoviePage));

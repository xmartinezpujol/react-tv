import React from 'react';
import glamorous from 'glamorous';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Loader from '../components/Loader';
import View from '../components/View';

import Languages from './components/Languages';
import MovieStats from './components/MovieStats';
import Sinopsis from './components/Sinopsis';

import * as movieActions from './../redux/modules/movie';

const MovieContainer = glamorous(View)({
  backgroundColor: '#F1F1F1',
});

const LoaderContainer = glamorous.div({
  position: 'absolute',
  backgroundColor: '#101010',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

const Card = glamorous(View)({
  width: '75%',
  padding: 20,
  border: '1px solid #d9d9d9',
  borderTop: 'none',
  '@media(min-width: 1140px)': {
    width: '70%',
  },
  '@media(max-width: 910px)': {
    width: '100%',
  },
});

class MoviePage extends React.Component {
  componentWillMount() {
    this.props.dispatch(movieActions.fetchMovie(this.props.match.params.id));
  }

  componentWillReceiveProps(newProps) {
    if (newProps.location.pathname !== this.props.location.pathname) {
      this.props.dispatch(movieActions.fetchMovie(newProps.match.params.id));
    }
  }

  componentWillUnmount() {
    this.props.dispatch(movieActions.resetMovie());
  }

  render() {
    const { data, isFetching } = this.props.movie;
    return (
      <MovieContainer>
        {isFetching &&
          <LoaderContainer>
            <Loader color="yellow" />
          </LoaderContainer>
        }
        {!isFetching &&
          <Card direction="column" type="purewhite">
            <MovieStats data={data} />
            <Sinopsis
              highlight={data.highlight}
              plot={data.plot}
            />
            <Languages streams={data.view_options.private.streams} />
          </Card>
        }
      </MovieContainer>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie,
});

export default withRouter(connect(mapStateToProps)(MoviePage));

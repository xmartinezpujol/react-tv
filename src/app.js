import React from 'react';
import glamorous from 'glamorous';

import { Switch, Route, withRouter } from 'react-router-dom';

import View from './components/View';

import Footer from './partials/Footer';
import Header from './partials/Header';
import HomePage from './home/HomePage';
import MoviePage from './movie/MoviePage';

const Body = glamorous(View)({
  backgroundColor: '#101010',
});

const BodyContainer = glamorous(View)({
  margin: '70px 70px 0px 70px',
  boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  '@media(max-width: 1690px)': {
    margin: '70px 0px 0px 0px',
  },
});

class App extends React.Component {
  render() {
    return (
      <Body direction="column">
        <Header />
        <BodyContainer direction="column">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <HomePage />}
            />
            <Route
              exact
              path="/movie/:id"
              component={MoviePage}
            />
          </Switch>
          <Footer />
        </BodyContainer>
      </Body>
    );
  }
}

export default withRouter(App);

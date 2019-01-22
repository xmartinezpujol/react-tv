import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from './partials/Header';
import HomePage from './home/HomePage';
import MovieDetail from './movie/containers/MovieDetail';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <HomePage />}
          />
          <Route
            exact
            path="/movie/:id"
            component={MovieDetail}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({

});

export default withRouter(connect(mapStateToProps)(App));

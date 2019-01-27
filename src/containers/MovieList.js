import React from 'react';
import glamorous from 'glamorous';

import { connect } from 'react-redux';

import Carousel from '../components/Carousel';
import List from '../components/List';
import Text from '../components/Text';
import View from '../components/View';

import * as listActions from './../redux/modules/list';

const Container = glamorous(View)({
  marginLeft: 20,
});

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.props.dispatch(listActions.fetchList(this.props.listName));
  }

  render() {
    const { cardSize, list, id } = this.props;

    return (
      <Container
        direction="column"
        style={{ position: 'relative' }}
      >
        {typeof (list.data[id]) !== 'undefined' &&
          <Text type="h2.w" >
            {list.data[id].name}
          </Text>
        }
        <Carousel
          isLoading={this.props.list.isFetching}
          numCards={typeof (list.data[id]) !== 'undefined' ? list.data[id].contents.data.length : 9}
          dimensions={cardSize}
          duration={600}
          data={list.data[id]}
        >
          <List
            data={list.data[id]}
            dimensions={cardSize}
          />
        </Carousel>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list,
});

export default connect(mapStateToProps)(MovieList);

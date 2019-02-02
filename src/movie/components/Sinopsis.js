import React from 'react';

import Text from '../../components/Text';
import View from '../../components/View';

const MovieStats = props => (
  <View style={{ flexWrap: 'wrap', marginBottom: 20 }}>
    <Text type="p1" style={{ fontWeight: 700, marginBottom: 0 }}>
      {props.highlight}
    </Text>
    <Text type="p1" style={{ textAlign: 'justify' }}>
      {props.plot}
    </Text>
  </View>
);

export default MovieStats;

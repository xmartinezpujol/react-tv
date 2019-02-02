import React from 'react';
import glamorous from 'glamorous';

import Icon from '../../components/Icon';
import Text from '../../components/Text';
import View from '../../components/View';

const StatItem = glamorous(View)({
  marginRight: 10,
});

const MovieStats = props => (
  <View style={{ flexWrap: 'wrap' }}>
    <StatItem align="center">
      <Icon
        size={14}
        name="user-circle"
        font="fa"
        style={{ marginRight: 5 }}
      />
      <Text
        type="p1"
        style={{
          fontSize: 14,
          fontWeight: 700,
          margin: '0px 15px 3px 0px',
          whiteSpace: 'nowrap',
        }}
      >
        {props.data.classification.name}
      </Text>
    </StatItem>
    <StatItem align="center">
      <Icon
        size={14}
        name="clock-o"
        font="fa"
        style={{ marginRight: 5 }}
      />
      <Text
        type="p1"
        style={{
          fontSize: 14,
          fontWeight: 700,
          margin: '0px 15px 3px 0px',
          whiteSpace: 'nowrap',
        }}
      >
        {`${props.data.duration} minutos`}
      </Text>
    </StatItem>
    <StatItem align="center">
      <Icon
        size={14}
        name="calendar-o"
        font="fa"
        style={{ marginRight: 5 }}
      />
      <Text
        type="p1"
        style={{
          fontSize: 14,
          fontWeight: 700,
          margin: '0px 15px 3px 0px',
          whiteSpace: 'nowrap',
        }}
      >
        {props.data.year}
      </Text>
    </StatItem>
    <StatItem align="center">
      <Icon
        size={14}
        name="flag"
        font="fa"
        style={{ marginRight: 5 }}
      />
      <Text
        type="p1"
        style={{
          fontSize: 14,
          fontWeight: 700,
          margin: '0px 15px 3px 0px',
          whiteSpace: 'nowrap',
        }}
      >
        {props.data.countries[0].name}
      </Text>
    </StatItem>
    <StatItem align="center">
      <Icon
        size={14}
        name="info-circle"
        font="fa"
        style={{ marginRight: 5 }}
      />
      <Text
        type="p1"
        style={{
          fontSize: 14,
          fontWeight: 700,
          margin: '0px 15px 3px 0px',
          whiteSpace: 'nowrap',
        }}
      >
        {`Título original: ${props.data.original_title}`}
      </Text>
    </StatItem>
  </View>
);

export default MovieStats;

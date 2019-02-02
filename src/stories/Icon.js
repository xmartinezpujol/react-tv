import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, number } from '@storybook/addon-knobs';

import withTests from '../withTests';

import Icon from '../components/Icon';

const optionsColor = {
  black: 'black',
  yellow: 'yellow',
  blue: 'blue',
  red: 'red',
  temporary: 'temporary',
  negative: 'negative',
};

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .addDecorator(withTests('Icon'))
  .add('default', () => {
    const defaultColor = 'night';
    const label = 'Color';
    const color = select(label, optionsColor, defaultColor);

    return (
      <Icon
        font={text('Icon Font', 'fa')}
        name={text('Icon name (FA)', 'comment')}
        size={number('Icon fontSize', 20)}
        style={{ padding: '0px 17px' }}
        color={color}
      />
    );
  });

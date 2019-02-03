import glamorous from 'glamorous';
import PropTypes from 'prop-types';

import { COLOR_PALETTE } from '../Constants';

const Container = {
  styles: {
    margin: '0 14px',
    maxWidth: '100%',
    '@media(min-width: 768px)': {
      margin: '0 auto',
      width: 720,
    },
    '@media(min-width: 992px)': {
      margin: '0 auto',
      width: 920,
    },
    '@media(min-width: 1200px)': {
      margin: '0 auto',
      width: '90vw',
      maxWidth: 1430,
    },
  },
  default: {},
};

const View = glamorous.div(props => (
  {
    borderRadius: props.round ? props.round : 0,
    display: 'flex',
    width: props.width ? props.width : 'auto',
    height: props.height ? props.height : 'auto',
    background: COLOR_PALETTE[props.type],
    justifyContent: props.justify,
    alignItems: props.align,
    flexDirection: props.direction,
    ...Container[props.container ? 'styles' : 'default'],
  }
));

View.propTypes = {
  type: PropTypes.string,
  round: PropTypes.bool,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.number,
  justify: PropTypes.string,
  align: PropTypes.string,
  direction: PropTypes.string,
  container: PropTypes.bool,
};

export default View;

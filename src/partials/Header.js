import React from 'react';
import glamorous from 'glamorous';
import * as glamor from 'glamor';

import { connect } from 'react-redux';

import Logo from '../components/Logo';
import Text from '../components/Text';
import View from '../components/View';

import MainMenu from './MainMenu';

const HeaderContainer = glamorous(View)({
  position: 'fixed',
  zIndex: 999,
  borderBottom: '1px solid rgba(255,255,255,.2)',
  padding: '10px 70px 10px 70px',
  '@media(max-width: 910px)': {
    padding: '10px 0px 10px 30px',
  },
});

const fadeIn = glamor.css.keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

class Header extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <HeaderContainer
        width="100%"
        type="black"
        direction="row"
        align="center"
      >
        {movie.isFetching &&
          <Logo color="white" scale={0.7} />
        }
        {!movie.isFetching &&
          <Text
            type="h2.w"
            style={{
              marginRight: 50,
              animation: `${fadeIn} 1s ease forwards`,
            }}
          >
            {movie.data.title}
          </Text>
        }
        <MainMenu />
      </HeaderContainer>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie,
});

export default connect(mapStateToProps)(Header);

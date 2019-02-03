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
  zIndex: 200,
  borderBottom: '1px solid rgba(255,255,255,.2)',
  padding: '10px 70px 10px 70px',
  '@media(max-width: 910px)': {
    padding: 0,
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
          <View>
            <Logo
              color="white"
              scale={window.innerWidth > 992 ? 0.7 : 0.5}
            />
          </View>
        }
        {!movie.isFetching &&
          <Text
            type="h2.w"
            style={{
              width: '60%',
              marginRight: 50,
              marginLeft: 25,
              animation: `${fadeIn} 1s ease forwards`,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {movie.data.title}
          </Text>
        }
        {!movie.isFetching &&
          <MainMenu />
        }
      </HeaderContainer>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie,
});

export default connect(mapStateToProps)(Header);

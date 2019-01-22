import React from 'react';

import Logo from '../components/Logo';
import View from '../components/View';
import MainMenu from './MainMenu';

const Header = props => (
  <View id="header" direction="row" align="center">
    <Logo />
    <MainMenu handleRoute={() => this.props.doRouting()} />
  </View>
);

export default Header;

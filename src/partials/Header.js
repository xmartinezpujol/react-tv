import React from 'react';
import glamorous from 'glamorous';

import Logo from '../components/Logo';
import View from '../components/View';
import MainMenu from './MainMenu';

const HeaderContainer = glamorous(View)({
  position: 'fixed',
  padding: '10px 0px',
  zIndex: 999,
  borderBottom: '1px solid rgba(255,255,255,.2)',
});

const Header = () => (
  <HeaderContainer
    width="100%"
    type="black"
    direction="row"
    align="center"
  >
    <Logo color="white" scale={0.7} />
    <MainMenu />
  </HeaderContainer>
);

export default Header;

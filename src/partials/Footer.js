import React from 'react';
import glamorous from 'glamorous';

import { Link } from 'react-router-dom';

import Logo from '../components/Logo';
import Text from '../components/Text';
import View from '../components/View';

const FooterContainer = glamorous(View)({
  padding: '10px 40px',
  marginTop: 70,
  borderBottom: '1px solid rgba(255,255,255,.2)',
  '@media(max-width: 730px)': {
    display: 'none',
  },
});

const MenuItem = glamorous.li({
  padding: 8,
  whiteSpace: 'nowrap',
});

const LogoContainer = glamorous.div({
  '@media(max-width: 1140px)': {
    display: 'none',
  },
});

const Footer = () => (
  <FooterContainer
    width="100%"
    type="black"
    direction="row"
    align="center"
  >
    <LogoContainer>
      <Logo color="text" scale={0.7} />
    </LogoContainer>
    <View>
      <nav>
        <ul style={{ display: 'flex' }}>
          <MenuItem>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://rd.rakuten.co.jp/s2/?R2=https%3A%2F%2Fglobal.rakuten.com%2Fcorp%2Fabout%2Fes%2F&D2=638.0.254405.0.32266630&C3=7406e2fdf8a0c2952abce3c27575c64205b95818"
            >
              <Text type="h4.w">
                acerca de Rakuten
              </Text>
            </a>
          </MenuItem>
          <MenuItem>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://rakuten.tv/es/pages/impressum"
            >
              <Text type="h4.w">
                quiénes somos
              </Text>
            </a>
          </MenuItem>
          <MenuItem>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://rakuten.tv/es/pages/terms_and_conditions_of_use"
            >
              <Text type="h4.w">
                condiciones de uso
              </Text>
            </a>
          </MenuItem>
          <MenuItem>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://rakuten.tv/es/pages/privacy_policy"
            >
              <Text type="h4.w">
                política de privacidad y cookies
              </Text>
            </a>
          </MenuItem>
          <MenuItem>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://jobs.rakuten.tv/"
            >
              <Text type="h4.w">
                trabaja con nosotros
              </Text>
            </a>
          </MenuItem>
        </ul>
      </nav>
    </View>
    <View>
      2009 - 2019 © Rakuten TV Europe, S.L.U. - v1.746.0
    </View>
  </FooterContainer>
);

export default Footer;

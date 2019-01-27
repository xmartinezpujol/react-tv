import React from 'react';
import { Link } from 'react-router-dom';

import Text from '../components/Text';

const MainMenu = () => (
  <nav>
    <ul>
      <li>
        <Link
          href="/"
          to="/"
        >
          <Text type="h3.w">
            Home
          </Text>
        </Link>
      </li>
    </ul>
  </nav>
);

export default MainMenu;

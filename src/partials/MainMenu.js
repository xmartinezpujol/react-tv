import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = props => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </nav>
);

export default MainMenu;

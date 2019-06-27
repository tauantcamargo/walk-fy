import { Container, Search, User } from './styles';

import React from 'react';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars0.githubusercontent.com/u/16005211?v=4" alt="Avatar"/>
      <span>Tauan Tathiell</span>
    </User>
  </Container>
);

export default Header;

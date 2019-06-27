import { Container, Wrapper } from './styles/components';

import GlobalStyle from './styles/global';
import Player from './components/Player';
import React from 'react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Sidebar />
        </Container>
        <Player />
      </Wrapper>
    </React.Fragment>
  );
}

export default App;

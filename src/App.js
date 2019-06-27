import { Container, Content, Wrapper } from './styles/components';

import  { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Player from './components/Player';
import React from 'react';
import Routes from './routes';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <GlobalStyle />
        <Wrapper>
          <Container>
            <Sidebar />
            <Content>
              <Header />
              <Routes />
            </Content>
          </Container>
          <Player />
        </Wrapper>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;

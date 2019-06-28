import './config/ReactotronConfig';

import { Container, Content, Wrapper } from './styles/components';

import  { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Player from './components/Player';
import { Provider } from 'react-redux';
import React from 'react';
import Routes from './routes';
import Sidebar from './components/Sidebar';
import store from './store';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;

import { Container, List, Playlist, Title } from './styles';

import React from 'react';

const Browse = () => (
  <Container>
    <Title>Browse</Title>

    <List>
      <Playlist to="/playlists/1">
        <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930" alt="Playlist" />
        <strong>Rockzin</strong>
        <p>Relaxe enquanto vc nao faz nada ouvindo um rockzin</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;

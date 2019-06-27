import { Brand, Container, Nav, NewPlaylist } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';
import React from 'react';

const Sidebar = () => (
  <Container>
    <div>
      <Brand>
        <a>Walkfy</a>
      </Brand>
      <Nav main>
        <li>
          <a>Browse</a>
        </li>
        <li>
          <a>Radio</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>Your List</span>
        </li>
        <li>
          <a>Your Daily Mix</a>
        </li>
        <li>
          <a>Recently Played</a>
        </li>
        <li>
          <a>Musics</a>
        </li>
        <li>
          <a>Albums</a>
        </li>
        <li>
          <a>Local Files</a>
        </li>
        <li>
          <a>Videos</a>
        </li>
        <li>
          <a>Podcasts</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>Playlists</span>
        </li>
        <li>
          <a>The best of Rock 'n roll</a>
        </li>
        <li>
          <a>The best Avicii</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Add playlist" />
      New Playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;

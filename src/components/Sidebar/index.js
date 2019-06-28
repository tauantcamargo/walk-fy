import { Brand, Container, Nav, NewPlaylist } from './styles';
import React, { Component } from 'react';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';
import { Link } from 'react-router-dom';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Sidebar extends Component {
  static propTypes = {
    playlists: PropTypes.arrayOf(PropTypes.shape({
      data: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      })
    })).isRequired,
    getPlaylistsRequest: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    const { playlists } = this.props;

    return (
      <Container>
        <div>
          <Brand>
            <Link to="/">Walkfy</Link>
          </Brand>

          <Nav main>
            <li>
              <Link to="/browse">Browse</Link>
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
            {playlists.data.map(({ id, title }) => (
              <li key={id}>
                <Link to={`/playlists/${id}`}>{title}</Link>
              </li>
            ))}
          </Nav>
        </div>

        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Add playlist" />
          New Playlist
        </NewPlaylist>
      </Container>
    );
  }
};

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

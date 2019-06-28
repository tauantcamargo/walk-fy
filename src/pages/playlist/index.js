import { Container, Header, SongItem, SongList } from './styles';
import React, { Component } from 'react';

import ClockIcon from '../../assets/images/clock.svg';
import Loading from '../../components/Loading';
import { Creators as PlayerActions } from '../../store/ducks/player';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';
import PlusIcon from '../../assets/images/plus.svg';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Playlist extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number,
      })
    }).isRequired,
    playlistDetails: PropTypes.shape({
      data: PropTypes.shape({
        id: PropTypes.number,
        description: PropTypes.string,
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        songs: PropTypes.arrayOf(PropTypes.shape({
          album: PropTypes.string,
          author: PropTypes.string,
          file: PropTypes.string,
          id: PropTypes.number,
          playlistId: PropTypes.number,
          thumbnail: PropTypes.string,
          title: PropTypes.string,
        }))
      }),
      loading: PropTypes.bool,
    }).isRequired,
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    loadSong: PropTypes.func.isRequired,
    currentSong: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  }

  state = {
    selectedSong: null,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) this.loadPlaylistDetails();
  }

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  loadPlaylistDetails = () => {
    const { id } = this.props.match.params;

    this.props.getPlaylistDetailsRequest(id);
  }

  renderDetails = () => {
    const {
      playlistDetails: {
        data: {
          thumbnail,
          songs,
          title
        }
      }
    } = this.props;

    return (
      <Container>
        <Header>
          <img src={thumbnail} alt={title} />

          <div>
            <span>PLAYLIST</span>
            <h1>{title}</h1>
            {!!songs && <p>{songs.length} musics</p>}

            <button>PLAY</button>
          </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th />
              <th>Title</th>
              <th>Artist</th>
              <th>Album</th>
              <th><img src={ClockIcon} alt="Duration" /></th>
            </tr>
          </thead>
          <tbody>
            {!songs ? (
              <tr>
                <td colspan={5}>No music added :/</td>
              </tr>
            ) : (
              songs.map(song => (
                <SongItem
                  key={song.playlistId}
                  onClick={() => this.setState({ selectedSong: song.id })}
                  onDoubleClick={() => this.props.loadSong(song, songs)}
                  selected={this.state.selectedSong === song.id}
                  playing={this.props.currentSong && this.props.currentSong.id === song.id}
                >
                  <td><img src={PlusIcon} alt="Add to playlist" /></td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>5:00</td>
                </SongItem>
              ))
            )}
          </tbody>
        </SongList>
      </Container>
    );
  }

  render() {
    const { playlistDetails: { loading } } = this.props;

    return loading ? (
      <Container loading="true">
        <Loading />
      </Container>
    ) : this.renderDetails();
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
  currentSong: state.player.currentSong,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...PlaylistDetailsActions, ...PlayerActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);

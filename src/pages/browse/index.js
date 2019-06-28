import { Container, List, Playlist, Title } from './styles';
import React, { Component } from 'react';

import Loading from '../../components/Loading';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Browse extends Component {
  static propTypes = {
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        thumbnail: PropTypes.string,
      })),
      loading: PropTypes.bool,
    }).isRequired,
    getPlaylistsRequest: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    const { playlists } = this.props;
    return (
      <Container>
        <Title>
          Browse
          {playlists.loading && <Loading />}
        </Title>

        <List>
          {playlists.data.map(({id, title, description, thumbnail}) => (
            <Playlist key={id} to={`/playlists/${id}`}>
              <img src={thumbnail} alt={title} />
              <strong>{title}</strong>
              <p>{description}</p>
            </Playlist>
          ))}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Browse);

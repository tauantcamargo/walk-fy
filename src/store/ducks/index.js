import { combineReducers } from 'redux';
import error from './error';
import playlistDetails from './playlistDetails';
import playlists from './playlists';

const reducers = combineReducers({
  playlists,
  playlistDetails,
  error,
});

export default reducers;

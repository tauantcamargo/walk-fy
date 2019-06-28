import { combineReducers } from 'redux';
import error from './error';
import player from './player';
import playlistDetails from './playlistDetails';
import playlists from './playlists';

const reducers = combineReducers({
  playlists,
  playlistDetails,
  error,
  player,
});

export default reducers;

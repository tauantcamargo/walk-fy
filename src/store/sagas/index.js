import { all, takeLatest } from 'redux-saga/effects';

import { Types as PlaylistDetailsTypes } from '../ducks/playlistDetails';
import { Types as PlaylistsTypes } from '../ducks/playlists';
import { getPlaylistDetails } from './playlistDetails';
import { getPlaylists } from './playlists';

export default function* rootSaga() {
  yield all([
    takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists),
    takeLatest(PlaylistDetailsTypes.GET_REQUEST, getPlaylistDetails),
  ]);
}

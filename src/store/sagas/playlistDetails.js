import { call, put } from 'redux-saga/effects';

import { Creators as ErrorActions } from '../ducks/error';
import { Creators as PlaylistDetailsActions } from '../ducks/playlistDetails';
import api from '../../services/api';

export function* getPlaylistDetails(action) {
  try {
    const { data } = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);

    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(data));
  } catch (err) {
    yield put(ErrorActions.setError('Was not possible get Playlist Details!'));
  }
}

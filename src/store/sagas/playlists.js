import { call, put } from 'redux-saga/effects';

import { Creators as ErrorActions } from '../ducks/error';
import { Creators as PlaylistsActions } from '../ducks/playlists';
import api from '../../services/api';

export function* getPlaylists() {
  try {
    const { data } = yield call(api.get, '/playlists');

    yield put(PlaylistsActions.getPlaylistsSuccess(data));
  } catch (err) {
    yield put(ErrorActions.setError('Was not possible get Playlists!'));
  }
}

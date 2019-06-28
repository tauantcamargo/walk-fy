/**
 * Types
 */
export const Types = {
  GET_REQUEST: 'playlist/GET_REQUEST',
  GET_SUCCESS: 'playlist/GET_SUCCESS'
};

/**
 * Initial State
 */
const INITIAL_STATE = {
  data: [],
  loading: false,
}

/**
 * Reducer
 */
export default function playlists(state = INITIAL_STATE, action) {
  switch(action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  getPlaylistsRequest: () => ({ type: Types.GET_REQUEST }),
  getPlaylistsSuccess: (data) => ({ type: Types.GET_SUCCESS, payload: { data }}),
}

const initialState = {
  data: [],
  isFetching: true,
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'STREAMING_SUCCESS':
      return Object.assign({}, action, {
        data: action.data,
        isFetching: false,
      });
    case 'RESET_STREAMING':
      return initialState;
    default: return state;
  }
}

// Sync Action
export const startStreamingSuccess = data => ({
  type: 'STREAMING_SUCCESS',
  isFetching: false,
  data,
});

export const resetStreaming = () => ({
  type: 'RESET_STREAMING',
});

// Async Action
export const startStreaming = (movieId) => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  return (dispatch) => {
    return fetch(`${proxyurl}https://gizmo.rakuten.tv/v3/me/streamings?classification_id=5&device_identifier=web&locale=es&market_code=es`,{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        audio_language: 'SPA',
        audio_quality: '2.0',
        content_id: movieId,
        content_type: 'movies',
        device_serial: 'device_serial_1',
        device_stream_video_quality: 'FHD',
        player: 'web:PD-NONE',
        subtitle_language: 'MIS',
        video_type: 'trailer',
      }),
    })
      .then(response => response.json())
      .then((res) => {
        dispatch(startStreamingSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

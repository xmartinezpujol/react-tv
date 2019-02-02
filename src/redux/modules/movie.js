const initialState = {
  data: [],
  isFetching: true,
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'FETCH_MOVIE_SUCCESS':
      return Object.assign({}, action, {
        data: action.data,
        isFetching: false,
      });
    case 'RESET_MOVIE':
      return initialState;
    default: return state;
  }
}

// Sync Action
export const fetchMovieSuccess = data => ({
  type: 'FETCH_MOVIE_SUCCESS',
  isFetching: false,
  data,
});

export const resetMovie = () => ({
  type: 'RESET_MOVIE',
});

// Async Action
export const fetchMovie = (movieId) => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  return (dispatch) => {
    return fetch(`${proxyurl}https://gizmo.rakuten.tv/v3/movies/${movieId}?classification_id=5&device_identifier=web&locale=es&market_code=es`)
      .then(response => response.json())
      .then((res) => {
        dispatch(fetchMovieSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

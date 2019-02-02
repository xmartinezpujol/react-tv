const initialState = {
  data: [],
  isFetching: true,
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'FETCH_RECOMMENDED_SUCCESS':
      return Object.assign({}, action, {
        data: action.data,
        isFetching: false,
      });
    case 'RESET_RECOMMENDED':
      return initialState;
    default: return state;
  }
}

// Sync Action
export const fetchRecommendationsSuccess = data => ({
  type: 'FETCH_RECOMMENDED_SUCCESS',
  isFetching: false,
  data,
});

export const resetRecommendations = () => ({
  type: 'RESET_RECOMMENDED',
});

// Async Action
export const fetchRecommendations = (movieId) => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  return (dispatch) => {
    return fetch(`${proxyurl}https://gizmo.rakuten.tv/v3/recommendations/movies/${movieId}?classification_id=5&device_identifier=web&locale=es&market_code=es`)
      .then(response => response.json())
      .then((res) => {
        dispatch(fetchRecommendationsSuccess(res.data));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

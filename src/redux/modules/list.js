// API CONFIG
const API_KEY = '3068f3a34eb23cadda9e625ea4e903bd';
const API_LANG = 'en-US';

const initialState = {
  list: [],
  isFetching: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_LIST_SUCCESS':
      return Object.assign({}, action, {
        list: [...state.list, action.list],
        isFetching: false,
      });
    default:
      return state;
  }
};

// Sync Action
export const fetchListSuccess = list => ({
  type: 'FETCH_LIST_SUCCESS',
  isFetching: false,
  list,
});

// Async Action
export const fetchList = (url, sort) => {
  return (dispatch) => {
    return fetch(`https://api.themoviedb.org/3/${url}?api_key=${API_KEY}${sort}&language=${API_LANG}`)
      .then(response => response.json())
      .then((res) => {
        dispatch(fetchListSuccess(res.results));
      })
      .catch((error) => {
        throw (error);
      });
  };
};

const initialState = {
  data: [],
  isFetching: true,
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'FETCH_LIST_SUCCESS':
      return Object.assign({}, action, {
        data: [
          ...state.data.filter(list => typeof (list) !== 'undefined' && list.id !== action.data.id),
          action.data,
        ],
        isFetching: false,
      });
    case 'RESET_LIST':
      return initialState;
    default: return state;
  }
};

// Sync Action
export const fetchListSuccess = data => ({
  type: 'FETCH_LIST_SUCCESS',
  isFetching: false,
  data,
});

export const resetLists = () => ({
  type: 'RESET_LIST',
});

// Async Action
export const fetchList = (listName) => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  return (dispatch) => {
    return fetch(`${proxyurl}https://gizmo.rakuten.tv/v3/lists/${listName}?classification_id=5&device_identifier=web&locale=es&market_code=es`,).then(response => response.json())
      .then((res) => {
        if (typeof (res.data) !== 'undefined') {
          dispatch(fetchListSuccess(res.data));
        } else {
          // TODO: handle error with a component
        }
      })
      .catch((error) => {
        throw (error);
      });
  };
};

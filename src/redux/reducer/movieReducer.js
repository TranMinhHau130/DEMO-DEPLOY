let initialState = { movieList: [], movieInfo: "" };

const movieReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIE_LIST_SUCESS": {
      return { ...state, movieList: payload };
    }
    case "GET_MOVIE_DETAIL_SUCCESS": {
      return { ...state, movieInfo: payload };
    }
    default:
      return state;
  }
};
export default movieReducer;

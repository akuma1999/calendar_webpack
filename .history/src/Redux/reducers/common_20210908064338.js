import * as Types from '../type/common';
const initialState = {
  isLoading: false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOADING_CHANGE:
      const { status } = action;
      console.log(status);
      return { ...state, isLoading: status };

    default:
      return { ...state };
  }
};

export default reducer;

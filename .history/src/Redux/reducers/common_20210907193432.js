import * as Types from '../type/common';
import moment from 'moment';
const initialState = {
  isLoading: false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOADING_CHANGEK:
      const { status } = action;
      return { ...state };

    default:
      return { ...state };
  }
};

export default reducer;

import * as Types from '../type/Task';
import moment from 'moment';
const initialState = {
  isLoading: false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_LIST_TASK:
      return { ...state };

    default:
      return { ...state };
  }
};

export default reducer;

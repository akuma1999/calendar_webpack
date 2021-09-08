import * as Types from '../type/Task';
import moment from 'moment';
const initialState = {
  Tasks: [],
  dateChoose: moment()
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.CHANGE_DATE:
      return { ...state, date: moment(action.moment, 'LLLL') };
    case Types.FETCH_LIST_TASK:
      return state;
    case Types.FETCH_LIST_SUCCESS:
      const { data } = action;
      return { ...state, Tasks: data };
    case Types.FETCH_LIST_FALIED:
      const { err } = action;
      return { ...state };
    default:
      return { ...state };
  }
};

export default reducer;

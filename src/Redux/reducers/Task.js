import * as Types from '../type/Task';
import moment from 'moment';
const initialState = {
  Tasks: [],
  taskOneDay: [],
  dateChoose: moment()
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_LIST_TASK:
      return { ...state };
    case Types.ADD_NEW_TASK:
      return { ...state };
    case Types.EDIT_TASK:
      return { ...state };
    case Types.DETELE_TASK:
      return { ...state };
    case Types.SET_TASK_ONE_DATE:
      const { dataOneDate } = action;
      return { ...state, taskOneDay: dataOneDate };
    case Types.FETCH_LIST_SUCCESS:
      const { data } = action.payload;
      return { ...state, Tasks: data };
    case Types.FETCH_LIST_FALIED:
      const { err } = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default reducer;

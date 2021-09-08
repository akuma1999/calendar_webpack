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
    default:
      return { ...state };
  }
};

export default reducer;

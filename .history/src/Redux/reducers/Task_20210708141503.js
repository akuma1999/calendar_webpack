import * as Types from '../type/Task';
import moment from 'moment';
const initialState = {
  Tasks: [],
  date: moment(),
  Thisdate: moment()
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

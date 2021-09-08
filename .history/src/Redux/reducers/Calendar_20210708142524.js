// import * as taskConstans from '../constants/Task';
// import { toastError } from '../helper/toastHelper';

import * as Types from '../type/Calendar.type';
import moment from 'moment';
const initialState = {
  userName: '',
  chooseDate: moment(),
  date: moment(),
  Thisdate: moment()
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.CHANGE_DATE:
      return { ...state, date: moment(action.moment, 'LLLL') };
    case Types.CHANE_CHOOSE_DATE:
      return { ...state, date: moment(action.moment, 'LLLL') };
    default:
      return { ...state };
  }
};

export default reducer;

import * as Types from '../type/Calendar.type.js';

export const ChangeDate = (moment) => ({
  type: Types.CHANGE_DATE,
  moment
});

export const ChangeChooseDate = (moment) => ({
  type: Types.CHANE_CHOOSE_DATE,
  moment
});

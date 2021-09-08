import * as Types from '../type/Calendar.type.js';

export const ChangeDate = (moment) => ({
  type: Types.CHANGE_DATE,
  moment
});

import * as Types from '../type/common';

export const fectListTask = (status) => ({
  type: Types.LOADING_CHANGE,
  status: status
});

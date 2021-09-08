import * as Types from '../type/common';

export const loadingChange = (status) => ({
  type: Types.LOADING_CHANGE,
  status: status
});

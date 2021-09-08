import * as Types from '../type/common';

export const loadingChange = (status) => {
  console.log(status);
  return {
    type: Types.LOADING_CHANGE,
    status: status
  };
};

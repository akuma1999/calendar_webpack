import types from '../type/common';

export const fectListTask = (status) => ({
  type: types.LOADING_CHANGE,
  status: status
});

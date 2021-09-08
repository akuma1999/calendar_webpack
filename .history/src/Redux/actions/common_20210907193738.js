import types from '../type/common.js';

export const fectListTask = (status) => ({
  type: types.LOADING_CHANGE,
  status: status
});

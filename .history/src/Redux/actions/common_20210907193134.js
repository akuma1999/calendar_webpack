import * as taskApis from '../apis/task';
import * as taskConstants from '../constants/Task';

export const fectListTask = () => ({
  type: taskConstants.FETCH_TASKo
});

export const fectListTaskSuccess = (data) => ({
  type: taskConstants.FETCH_TASK_SUCCES,
  payload: {
    data
  }
});

export const fectListTaskFailed = (error) => ({
  type: taskConstants.FETCH_TASK_FAILED,
  payload: {
    error
  }
});

export const filterTask = (keyword) => ({
  type: taskConstants.FILTER_TASK,
  payload: {
    keyword
  }
});

export const filterTaskSucces = (data) => ({
  type: taskConstants.FILTER_TASK_SUCCES,
  payload: {
    data
  }
});

// export const fectListTaskRequest = () => (dispatch) => {
//   dispatch(fectListTask());
//   taskApis
//     .getList()
//     .then((resp) => {
//       const { data } = resp;
//       dispatch(fectListTaskSuccess(data));
//     })
//     .catch((error) => {
//       dispatch(fectListTaskFailed(error));
//     });
// };

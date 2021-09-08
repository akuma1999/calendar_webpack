import * as Types from '../type/Task';
import * as TaskApis from '../../api/task';
import * as CommonActions from '../actions/common';
export const fectListTask = () => ({
  type: Types.FETCH_LIST_TASK
});

export const addNewTask = () => ({
  type: Types.ADD_NEW_TASK
});

export const editTask = () => ({
  type: Types.EDIT_TASK
});

export const deleteTask = () => ({
  type: Types.DETELE_TASK
});

export const changeTaskOneDate = (data) => ({
  type: Types.SET_TASK_ONE_DATE,
  dataOneDate: data
});

export const fectListTaskSuccess = (data) => ({
  type: Types.FETCH_LIST_SUCCESS,
  payload: {
    data
  }
});

export const fectListTaskFailed = (error) => ({
  type: Types.FETCH_LIST_FALIED,
  payload: {
    error
  }
});

export const fectListTaskRequest = async (dispatch) => {
  dispatch(fectListTask());
  dispatch(CommonActions.loadingChange(true));
  await TaskApis.fectTask()
    .then((resp) => {
      const { data } = resp;
      dispatch(fectListTaskSuccess(data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(fectListTaskFailed(error));
    });
  dispatch(CommonActions.loadingChange(false));
};

export const addNewTaskRequest = async (dispatch, data) => {
  await dispatch(addNewTask());

  await TaskApis.postTask(data)
    .then((resp) => console.log(resp))
    .catch((err) => {
      console.error(err);
    });
};

export const editTaskRequest = async (dispatch, id, data) => {
  dispatch(editTask());

  await TaskApis.putTask(id, data);
};

export const deleteTaskRequest = async (dispatch, id) => {
  dispatch(deleteTask());
  console.log('2');
  await TaskApis.deleteTask(id);
};

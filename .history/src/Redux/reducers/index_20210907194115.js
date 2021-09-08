import { combineReducers } from 'redux';
import Calendar from './Calendar';
import Task from './Task';
const rootReducer = combineReducers({
  common: Calendar,
  common2: common,
  task: Task
});

export default rootReducer;

import {combineReducers} from 'redux';
import concepts from './conceptReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
  concepts,
  error
});


export default rootReducer;

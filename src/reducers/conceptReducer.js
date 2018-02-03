import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function conceptReducer(state = initialState.concepts, action) {
  switch (action.type) {

    case types.LOAD_CONCEPTS_SUCCESS:
         return  action.concepts;
    case types.LOAD_CONCEPTS_ERROR:
      return action.concepts;

    default:
      return state;

  }
}

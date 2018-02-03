import * as types from './actionTypes';
import conceptsApi from '../api/conceptAPI';

export function loadConcepts(){
  return function (dispatch){

    //Call to the API
    return conceptsApi.getAllConcepts()
      .then(concepts => {
        dispatch(loadConceptsSuccess(concepts));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function loadConceptsSuccess(concepts)
{
  return {type : types.LOAD_CONCEPTS_SUCCESS, concepts};
}

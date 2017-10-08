import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'
//import merge from 'lodash/merge'
import {FETCH_GAMES, FETCH_GAMES_SUCCESS, FETCH_GAMES_FAILURE,
  FETCH_GAME, FETCH_GAME_SUCCESS, FETCH_GAME_FAILURE,
  FETCH_TRAILERS, FETCH_TRAILERS_SUCCESS, FETCH_TRAILERS_FAILURE,
  SEARCH_GAME, SEARCH_GAME_SUCCESS, SEARCH_GAME_FAILURE,
  ENTER_SEARCH_TEXT} from '../actions'

const defaultStateList = {
  isFetching: false,
  items:[],
  error:{}
};

const gameList = (state = defaultStateList, action) => {
  switch (action.type){
    case FETCH_GAMES:
    case SEARCH_GAME:
      return {...state, isFetching:true};
    case FETCH_GAMES_SUCCESS:
    case SEARCH_GAME_SUCCESS:
      return {...state, isFetching:false, items:action.data};
    case FETCH_GAMES_FAILURE:
    case SEARCH_GAME_FAILURE:
      return {...state, isFetching:false, error:action.data};
    default:
      return state;
  }
};

/* const castList = (state = defaultStateList, action) => {
  switch (action.type){
    case FETCH_CASTS:
      return Object.assign({}, state, {
        isFetching:true
      });
    case FETCH_CASTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching:false,
        items:action.data
      });
    case FETCH_CASTS_FAILURE:
      return Object.assign({}, state, {
        isFetching:false,
        error:action.data
      });
    default:
      return state;
  }
};
*/

const trailerList = (state = defaultStateList, action) => {
  switch (action.type){
    case FETCH_TRAILERS:
      return Object.assign({}, state, {
        isFetching:true
      });
    case FETCH_TRAILERS_SUCCESS:
      return Object.assign({}, state, {
        isFetching:false,
        items:action.data
      });
    case FETCH_TRAILERS_FAILURE:
      return Object.assign({}, state, {
        isFetching:false,
        error:action.data
      });
    default:
      return state;
  }
};

const defaultState = {
  isFetching: false,
  item:{},
  error:{}
};

const gameDetail = (state = defaultState, action) => {
  switch (action.type){
    case FETCH_GAME:
      return Object.assign({}, state, {
        isFetching:true
      });
    case FETCH_GAME_SUCCESS:
      return Object.assign({}, state, {
        isFetching:false,
        item:action.data
      });
    case FETCH_GAME_FAILURE:
      return Object.assign({}, state, {
        isFetching:false,
        error:action.data
      });
    default:
      return state;
  }
};

/* const starDetail = (state = defaultState, action) => {
  switch (action.type){
    case FETCH_STAR_SUCCESS:
      return Object.assign({}, state, {
        isFetching:false,
        item:action.data
      });
    case FETCH_STAR_FAILURE:
      return Object.assign({}, state, {
        isFetching:false,
        error:action.data
      });
    default:
      return state;
  }
};
*/

const input = (state = '', action) => {
  switch (action.type){
    case ENTER_SEARCH_TEXT:
      return Object.assign({}, state, {
        isFetching:true
      });
    default:
      return state;
  }
};

const gameApp = combineReducers({
  gameList,
  //castList,
  trailerList,
  gameDetail,
  //starDetail,
  input,
  routing: routerReducer
});

export default gameApp;

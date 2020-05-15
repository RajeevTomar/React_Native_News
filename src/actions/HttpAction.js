import { HTTP_ERROR, HTTP_SUCCESS, SHOW_LOADING } from '../actions/Type'
import axios from 'axios';
import { BASE_URL } from '../server/Url';
import axiosClient from '../server/AxiosClient';
import  NetInfo  from "@react-native-community/netinfo";
import {NETWORK_ERROR_TYPE,HTTP_ERROR_TYPE} from '../Constants';

/**
 *  -- "It's common action function for all http calls"
 *   We can also break the functions based on each API call
 *   like below - "fetchNews"
 * 
 * @param {*} config -- it have config like methods name,
 *   api stateName - based on multiple result can be sent
 *  to the component props
 *   
 */
export const httpGet = (config) => {
  return (dispatch) => {
    dispatchActions(dispatch, SHOW_LOADING, true);
    NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        let payload = {errorType:NETWORK_ERROR_TYPE,
        errorMessage:'Internet connection not found. Please check your internet setting.'};
        dispatchActions(dispatch, HTTP_ERROR, payload);
      }
      else {
        axiosClient({
          method: 'get',
          url: BASE_URL + config.method,
          params: config.params
        }).then(res => {
          dispatchActions(dispatch, HTTP_SUCCESS, { response: res.data, state: config.state });
        }).catch(err => {
          dispatchActions(dispatch, HTTP_ERROR, {errorType:HTTP_ERROR_TYPE, errorMessage:err});
        });
      }
    });
  };
};

/**
 * 
 * @param {*} dispatch -- sent action to the reducer
 * @param {*} config -- it have config like methods name,
 *  api stateName - based on multiple result can be sent
 *  to the component props
 */
export const fetchNews = (dispatch, config) => {
  dispatchActions(dispatch, SHOW_LOADING, true);
  axiosClient({
    method: 'get',
    url: BASE_URL + config.method,
    params: config.params
  }).then(res => {
    dispatchActions(dispatch, HTTP_SUCCESS, { response: res.data, state: config.state });
  }).catch(err => {
    dispatchActions(dispatch, HTTP_ERROR, err);
  });
}


const connectionCheck = (dispatch) => {
  NetInfo.isConnected.fetch().then(isConnected => {
    if (!isConnected) {
      const errorMessage = 'Internet connection not found. Please check your internet setting.'
      dispatchActions(dispatch, HTTP_ERROR, errorMessage);
    }
  });

}

/*
 * 
 * @param {*} dispatch -- dispatch the actions to the reducers
 * @param {*} type - type define the action and based on action reducter return the state 
 * @param {*} payload - is the object that can pass with action type
 */
const dispatchActions = (dispatch, action, payload) => {
  dispatch({
    type: action,
    payload: payload
  });
};
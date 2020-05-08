import { HTTP_ERROR, HTTP_SUCCESS, SHOW_LOADING } from '../actions/Type'
import axios from 'axios';
import {BASE_URL} from '../server/Url';
import axiosClient from '../server/AxiosClient';

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
export const httpGet = (config) =>{
    return (dispatch) => {
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
      };
};

/**
 * 
 * @param {*} dispatch -- sent action to the reducer
 * @param {*} config -- it have config like methods name,
 *  api stateName - based on multiple result can be sent
 *  to the component props
 */
export const fetchNews = (dispatch,config) =>{
    dispatchActions(dispatch,SHOW_LOADING,true);
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

const dispatchActions = (dispatch, type, payload) => {
    dispatch({
      type: type,
      payload: payload
    });
  };
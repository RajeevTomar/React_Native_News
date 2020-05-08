import { HTTP_ERROR, HTTP_SUCCESS, SHOW_LOADING } from '../actions/Type'
import axios from 'axios';
import {BASE_URL} from '../server/Url';
import axiosClient from '../server/AxiosClient';

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

const dispatchActions = (dispatch, type, payload) => {
    dispatch({
      type: type,
      payload: payload
    });
  };
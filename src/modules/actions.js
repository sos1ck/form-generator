import {
  GET_FORM_DATA,
  SET_FORM_VALUE,
  RESET_FORM_VALUE,
  SET_ERROR_MESSAGE,
  RESET_ERROR_MESSAGE,
  RESET_FORM,
  SET_ERROR,
} from './actionTypes';
import { baseUrl } from '../helpers/consts';

export const getFormData = () => {
  return {
    type: GET_FORM_DATA,
    payload: {
      request: {
        method: 'get',
        url: baseUrl,
      },
    },
  };
};

export const setFormValue = (name, value) => {
  return {
    type: SET_FORM_VALUE,
    data: {
      [name]: value,
    },
  };
};

export const resetFormValue = (name, value = '') => {
  return {
    type: RESET_FORM_VALUE,
    data: {
      [name]: value,
    },
  };
};

export const setErrorMessage = errorMessage => {
  return {
    type: SET_ERROR_MESSAGE,
    data: { errorMessage },
  };
};

export const resetErrorMessage = (errorField, value = '') => {
  return {
    type: RESET_ERROR_MESSAGE,
    data: {
      [errorField]: value,
    },
  };
};

export const resetForm = () => {
  return {
    type: RESET_FORM,
  };
};

export const setError = () => {
  return {
    type: SET_ERROR,
  };
};

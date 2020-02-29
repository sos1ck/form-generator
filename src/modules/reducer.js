import {
  GET_FORM_DATA,
  GET_FORM_DATA_SUCCESS,
  GET_FORM_DATA_FAIL,
  SET_FORM_VALUE,
  RESET_FORM_VALUE,
  SET_ERROR_MESSAGE,
  RESET_ERROR_MESSAGE,
  RESET_FORM,
  SET_ERROR,
} from './actionTypes';

const initialState = {
  formFieldsData: [],
  isLoading: false,
  isError: false,
  formValues: {
    name: '',
    nickname: '',
    email: '',
    field: '',
    positions: '',
  },
  errorMessages: {
    name: '',
    nickname: '',
    email: '',
    field: '',
    positions: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FORM_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case GET_FORM_DATA_SUCCESS:
      return {
        ...state,
        formFieldsData: action.payload.data,
        isLoading: false,
      };
    case GET_FORM_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case SET_FORM_VALUE:
      return {
        ...state,
        formValues: {
          ...state.formValues,
          ...action.data,
        },
      };
    case RESET_FORM_VALUE:
      return {
        ...state,
        formValues: {
          ...state.formValues,
          ...action.data,
        },
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessages: {
          ...state.errorMessages,
          ...action.data.errorMessage,
        },
      };
    case RESET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessages: {
          ...state.errorMessages,
          ...action.data,
        },
      };
    case RESET_FORM: {
      return {
        ...state,
        formValues: {
          name: '',
          nickname: '',
          email: '',
          field: '',
          positions: '',
        },
        errorMessages: {
          name: '',
          nickname: '',
          email: '',
          field: '',
          positions: '',
        },
      };
    }
    case SET_ERROR:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};

export default reducer;

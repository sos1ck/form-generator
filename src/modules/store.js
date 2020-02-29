import { createStore, compose, applyMiddleware } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import logger from 'redux-logger';
import axios from 'axios';

import { development } from '../helpers/consts';
import reducer from './reducer';

const middleware = [development && logger, axiosMiddleware(axios)].filter(Boolean);

const store = createStore(reducer, compose(applyMiddleware(...middleware)));

export default store;

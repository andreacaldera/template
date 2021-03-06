import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import meta from './meta';
import timer from './timer';
import politics from './politics';
import ui from './ui';

import { NAMESPACE } from './constants';

const rootReducer = combineReducers({
  meta,
  timer,
  politics,
  ui,
});

module.exports = combineReducers({ routing: routerReducer, [NAMESPACE]: rootReducer });

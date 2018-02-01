/* eslint-disable import/newline-after-import */
import { combineReducers } from 'redux';
import sliderDisplay from '../reducers/sliderDisplay.js';
import search from '../reducers/search.js';
const reducers = {
  search,
  sliderDisplay
};
const combined = combineReducers(reducers);
module.exports = combined;

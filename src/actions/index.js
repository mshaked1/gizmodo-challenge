/* eslint-disable import/newline-after-import */
import slide from '../actions/slide.js';
import navigate from '../actions/navigate.js';
import setMainDisplay from '../actions/setMainDisplay.js';
import storeSearchResults from '../actions/storeSearchResults.js';
import executeSearch from '../actions/executeSearch.js';
import typeSearch from '../actions/typeSearch.js';
const actions = {
  typeSearch,
  executeSearch,
  storeSearchResults,
  setMainDisplay,
  navigate,
  slide
};
module.exports = actions;

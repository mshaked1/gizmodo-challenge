import { STORE_SEARCH_RESULTS } from './const';
/* eslint no-console: "off" */

function storeSearchResults(parameter) {
  return { type: STORE_SEARCH_RESULTS, parameter };
}

module.exports = storeSearchResults;

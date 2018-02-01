import { STORE_SEARCH_RESULTS } from './const';

function storeSearchResults(parameter) {
  return { type: STORE_SEARCH_RESULTS, parameter };
}

module.exports = storeSearchResults;

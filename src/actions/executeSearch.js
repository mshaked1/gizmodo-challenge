import storeSearchResults from './storeSearchResults';

function executeSearch(parameter) {
  return function (dispatch) {
    return fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=de0793868168aa71a7fadad45339a049&page=${parameter.page}&per_page=4&format=json&nojsoncallback=1&text=${parameter.search}
    `, {
      // mode: 'no-cors',
      method: 'GET',
      headers: {
        Accept: 'application/json',
      }
    })
      .then(res => res.json())
      .then(json => dispatch(storeSearchResults(json)));
  };
}

module.exports = executeSearch;

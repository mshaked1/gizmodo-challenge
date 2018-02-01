/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { STORE_SEARCH_RESULTS, NAVIGATE, SLIDE } from '../actions/const';

const initialState = {
  photos: [],
  page: 1,
  mainPhoto: {
    url: '',
    index: 0
  }
};

const formUrl = photo => `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

function reducer(state = initialState, action) {
  switch (action.type) {
    case STORE_SEARCH_RESULTS: {
      const photo = action.parameter.photos.photo[0];
      return {
        ...state,
        photos: action.parameter.photos.photo.map(photoFromList => formUrl(photoFromList)),
        page: 1,
        mainPhoto: {
          url: formUrl(photo),
          index: 0
        }
      };
    }
    case NAVIGATE: {
      if (action.parameter.index === 0) {
        return { ...state };
      }
      return {};
    }
    case SLIDE: {
      return {
        ...state,
        mainPhoto: {
          url: formUrl(state.photos[action.parameter]),
          index: action.parameter
        }
      };
    }
    default: {
      return state;
    }
  }
}

module.exports = reducer;

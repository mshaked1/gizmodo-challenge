import { STORE_SEARCH_RESULTS, SLIDE } from '../actions/const';

const initialState = {
  photos: [],
  page: 0,
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
        page: action.parameter.photos.page,
        mainPhoto: {
          url: formUrl(photo),
          index: 0
        }
      };
    }
    case SLIDE: {
      return {
        ...state,
        mainPhoto: {
          url: state.photos[action.parameter],
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

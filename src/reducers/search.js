/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
/* eslint no-console: "off" */
import * as actions from '../actions/const';

const initialState = {
  search: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.TYPE_SEARCH: {
      return {search: action.parameter};
    }
    case actions.EXECUTE_SEARCH: {
      return {search: ''};
    }
    default: {
      return state;
    }
  }
}

module.exports = reducer;

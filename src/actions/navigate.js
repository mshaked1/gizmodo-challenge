import executeSearch from './executeSearch';
import slide from './slide';

function navigate(parameter) {
  if (parameter.direction === 'left') {
    if (parameter.index === 0) {
      return dispatch => dispatch(executeSearch({
        page: parameter.page - 1,
        search: parameter.search
      }));
    }
    return dispatch => dispatch(slide(parameter.index - 1));
  }
  if (parameter.index === 3) {
    return dispatch => dispatch(executeSearch({
      page: parameter.page + 1,
      search: parameter.search
    }));
  }
  return dispatch => dispatch(slide(parameter.index + 1));
}

module.exports = navigate;

import { TYPE_SEARCH } from './const';

function action(parameter) {
  return { type: TYPE_SEARCH, parameter };
}

module.exports = action;

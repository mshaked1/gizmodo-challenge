import { TYPE_SEARCH } from './const';
/* eslint no-console: "off" */

function action(parameter) {
  return { type: TYPE_SEARCH, parameter };
}

module.exports = action;

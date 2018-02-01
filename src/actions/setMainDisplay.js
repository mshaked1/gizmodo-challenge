import { SET_MAIN_DISPLAY } from './const';

function action(parameter) {
  return { type: SET_MAIN_DISPLAY, parameter };
}

module.exports = action;

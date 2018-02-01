/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  typeSearch,
  executeSearch,
  storeSearchResults,
  setMainDisplay,
  navigate,
  slide
} from '../actions/';
import Main from '../components/App';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {actions, search, sliderDisplay} = this.props;
    return <Main actions={actions} search={search} sliderDisplay={sliderDisplay}/>;
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.shape({
    typeSearch: PropTypes.func.isRequired,
    executeSearch: PropTypes.func.isRequired,
    storeSearchResults: PropTypes.func.isRequired,
    setMainDisplay: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    slide: PropTypes.func.isRequired
  }),
  search: PropTypes.shape({}),
  sliderDisplay: PropTypes.shape({})
};
function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = {
    search: state.search,
    sliderDisplay: state.sliderDisplay
  };
  return {};
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    typeSearch,
    executeSearch,
    storeSearchResults,
    setMainDisplay,
    navigate,
    slide
  };
  // const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

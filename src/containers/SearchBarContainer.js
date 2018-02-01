import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { typeSearch, executeSearch } from '../actions/';
import SearchBar from '../components/SearchBar';
/* eslint no-console: "off" */

const mapStateToProps = state => ({
  search: state.search.search
});

const mapDispatchToProps = dispatch =>
  ({
    onChange: value => dispatch(typeSearch(value)),
    onClick: value => dispatch(executeSearch(value))
  });

const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

SearchBarContainer.propTypes = {
  search: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);

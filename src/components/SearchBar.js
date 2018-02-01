import React from 'react';
import PropTypes from 'prop-types';
import './Searchbar.scss';

const SearchBar = ({ search, onChange, onClick }) => (
  <div className="searchbar-comp">
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onClick({page: 1, search: event.target.elements.search.value});
      }}
    >
      <input
        id="searchbar-input"
        type="text"
        placeholder="Find Flickr Photos..."
        defaultValue={search}
        name="search"
        onChange={event => onChange(event.target.value)}
      />
    </form>
  </div>
);

SearchBar.displayName = 'SearchBar';
SearchBar.propTypes = {
  search: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};
SearchBar.defaultProps = {};

export default SearchBar;

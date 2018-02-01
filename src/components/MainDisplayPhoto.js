import React, { PropTypes } from 'react';
import './maindisplayphoto.scss';

const MainDisplayPhoto = ({ page, url, index, navigate, search }) => (
  <div className="maindisplayphoto-component">
    <button
      className="arrow"
      disabled={page === 1}
      onClick={() => navigate({direction: 'left', page, index, search})}
    >{'<'}</button>
    {url && <img src={url} style={{height: 300, width: 300}} alt="What you want to see"/>}
    {!url && <div id="placeholder"/>}
    <button
      className="arrow"
      onClick={() => navigate({direction: 'right', page, index, search})}
    >{'>'}</button>
  </div>
);

MainDisplayPhoto.displayName = 'MainDisplayPhoto';
MainDisplayPhoto.propTypes = {
  page: PropTypes.number.isRequired,
  url: PropTypes.string,
  index: PropTypes.number,
  navigate: PropTypes.func.isRequired,
  search: PropTypes.string
};
MainDisplayPhoto.defaultProps = {};

export default MainDisplayPhoto;

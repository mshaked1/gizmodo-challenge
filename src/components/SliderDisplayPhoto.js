import React, { PropTypes } from 'react';
import './sliderdisplayphoto.scss';

const SliderDisplayPhoto = ({ url, isSelected, id, handleClick }) => (
  <div>
    <button
      className="photo-button"
      onClick={() => handleClick(id)}
    >
      <img
        src={url}
        className={`sliderdisplayphoto-component ${isSelected ? 'selected' : ''}`}
        alt={id}
      />
    </button>
  </div>
);

SliderDisplayPhoto.displayName = 'SliderDisplayPhoto';
SliderDisplayPhoto.propTypes = {
  url: PropTypes.string,
  isSelected: PropTypes.bool,
  id: PropTypes.number,
  handleClick: PropTypes.func
};
SliderDisplayPhoto.defaultProps = {};

export default SliderDisplayPhoto;

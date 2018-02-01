import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './sliderdisplaycomponent.scss';
import SliderDisplayPhoto from '../components/SliderDisplayPhoto';

const SliderDisplayComponent = ({ photos, mainIndex, onClick }) => (
  <div className="sliderdisplaycomponent-component">
    <ReactCSSTransitionGroup
      transitionName="slide"
      transitionEnterTimeout={1500}
      transitionLeaveTimeout={1500}
    >
      {photos.map((photo, index) => (
        <SliderDisplayPhoto
          url={photo}
          isSelected={mainIndex === index}
          key={index}
          id={index}
          handleClick={onClick}
        />
      ))}
    </ReactCSSTransitionGroup>
  </div>
);

SliderDisplayComponent.displayName = 'SliderDisplayComponent';
SliderDisplayComponent.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string),
  mainIndex: PropTypes.number,
  onClick: PropTypes.func
};
SliderDisplayComponent.defaultProps = {};

export default SliderDisplayComponent;

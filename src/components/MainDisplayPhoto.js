import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './maindisplayphoto.scss';

const MainDisplayPhoto = ({ page, url, index, navigate, search }) => (
  <div className="maindisplayphoto-component">
    <button
      className="arrow"
      disabled={page <= 1}
      onClick={() => navigate({direction: 'left', page, index, search})}
    >{'<'}</button>
    <ReactCSSTransitionGroup
      transitionName="slide"
      transitionEnterTimeout={1500}
      transitionLeave={false}
    >
      {url &&
        <img
          src={url}
          alt="What you want to see"
          key={url}
        />
      }
    </ReactCSSTransitionGroup>
    {!url && <div id="placeholder"/>}
    <button
      className="arrow"
      disabled={page === 0}
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

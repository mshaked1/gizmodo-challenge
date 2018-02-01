import React from 'react';
import './app.css';
import SearchBarContainer from '../containers/SearchBarContainer';
import MainDisplay from '../containers/MainDisplay';
import SliderDisplay from '../containers/SliderDisplay';

const AppComponent = () => (
  <div className="index">
    <div id="header">Flickr Photo Finder</div>
    <div id="search-bar-container">
      <SearchBarContainer />
    </div>
    <div id="main-display-container">
      <MainDisplay />
    </div>
    <div id="slider-display-container">
      <SliderDisplay />
    </div>
  </div>
);

export default AppComponent;

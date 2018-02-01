import React from 'react';
import './app.css';
import SearchBarContainer from '../containers/SearchBarContainer';
import MainDisplay from '../containers/MainDisplay';
import SliderDisplay from '../containers/SliderDisplay';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <SearchBarContainer/>
        <div>
          <MainDisplay/>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

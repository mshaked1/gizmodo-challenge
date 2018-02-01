import React from 'react';
import './app.css';
import SearchBarContainer from '../containers/SearchBarContainer';


class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <SearchBarContainer/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

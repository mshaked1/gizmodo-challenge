import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from 'components/SearchBar.js';

describe('<SearchBar />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<SearchBar />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "searchbar-component"', function () {
      expect(component.hasClass('searchbar-component')).to.equal(true);
    });
  });
});

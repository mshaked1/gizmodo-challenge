import React from 'react';
import { shallow } from 'enzyme';
import MainDisplayPhoto from 'components/MainDisplayPhoto.js';

describe('<MainDisplayPhoto />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<MainDisplayPhoto />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "maindisplayphoto-component"', function () {
      expect(component.hasClass('maindisplayphoto-component')).to.equal(true);
    });
  });
});

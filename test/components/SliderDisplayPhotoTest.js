import React from 'react';
import { shallow } from 'enzyme';
import SliderDisplayPhoto from 'components/SliderDisplayPhoto.js';

describe('<SliderDisplayPhoto />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<SliderDisplayPhoto />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "sliderdisplayphoto-component"', function () {
      expect(component.hasClass('sliderdisplayphoto-component')).to.equal(true);
    });
  });
});

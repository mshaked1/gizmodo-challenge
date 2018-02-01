import React from 'react';
import { shallow } from 'enzyme';
import SliderDisplayComponent from 'components/SliderDisplayComponent.js';

describe('<SliderDisplayComponent />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<SliderDisplayComponent />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "sliderdisplaycomponent-component"', function () {
      expect(component.hasClass('sliderdisplaycomponent-component')).to.equal(true);
    });
  });
});

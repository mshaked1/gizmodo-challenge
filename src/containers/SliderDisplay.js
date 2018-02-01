import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { slide } from '../actions/';
import SliderDisplayComponent from '../components/SliderDisplayComponent';

const mapStateToProps = state => ({
  photos: state.sliderDisplay.photos,
  mainIndex: state.sliderDisplay.mainPhoto.index
});

const mapDispatchToProps = dispatch => ({
  onClick: index => dispatch(slide(index))
});

const SliderDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(SliderDisplayComponent);

SliderDisplay.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string),
  mainIndex: PropTypes.number,
  onClick: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SliderDisplay);

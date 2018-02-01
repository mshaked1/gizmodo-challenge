import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { navigate } from '../actions/';
import MainDisplayPhoto from '../components/MainDisplayPhoto';


const mapStateToProps = state => ({
  page: state.sliderDisplay.page,
  url: state.sliderDisplay.mainPhoto.url,
  index: state.sliderDisplay.mainPhoto.index,
  search: state.search.search
});

const mapDispatchToProps = dispatch => ({
  navigate: props => dispatch(navigate(props))
});

const MainDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainDisplayPhoto);


MainDisplay.propTypes = {
  page: PropTypes.number.isRequired,
  url: PropTypes.string,
  index: PropTypes.number,
  navigate: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MainDisplay);

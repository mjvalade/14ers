import { connect } from 'react-redux';
import MarkerList from '../components/MarkerList'; //component for rendering markers
import getVisibleMountains from '../helpers/getVisibleMountains';

import mountains from '../data/mountains'; //hard-coded mountains data

const mapStateToProps = (state) => {
  return {
    mountains: getVisibleMountains(
      mountains,
      state.search.query, //query entered by the user
      state.search.filters //filters selected by the user
    )
  };
};

const VisibleMarkers = connect(
  mapStateToProps
)(MarkerList);

export default VisibleMarkers;

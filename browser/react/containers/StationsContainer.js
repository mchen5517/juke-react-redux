import {connect} from 'react-redux';
import Stations from '../components/Stations';

const convertSongsToStations = function(songsArray){
  let stations = {};
  songsArray.forEach((song) => {
    if(!stations[song.genre]) stations[song.genre] = [];
    stations[song.genre].push(song);
  });
  return stations;
}

const mapStateToProps = function(state){
  return {
    stations: convertSongsToStations(state.songs)
  };
}

const StationsContainer = connect(
  state => ({stations: convertSongsToStations(state.songs)})
)(Stations);

export default StationsContainer;

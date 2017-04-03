import React, {Component} from 'react';
import store from '../store';
import Artist from '../components/Artist';
import {connect} from 'react-redux';

import {toggleSong} from '../action-creators/player';

// class ArtistContainer extends Component {

//   constructor() {
//     super();
//     this.state = store.getState();
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   toggle(song, list) {
//     store.dispatch(toggleSong(song, list));
//   }

//   render() {
//     return (
//       <Artist
//         {...this.state.player}
//         selectedArtist={this.state.artists.selected}
//         toggleOne={this.toggle}
//         children={this.props.children} />
//     );
//   }

// }

// export default ArtistContainer;

export default connect(
  (state, ownProps) => {
    return {
      songs: state.songs,
      selectedArtist: state.artists.selected,
      isPlaying: state.player.isPlaying,
      currentSong: state.player.currentSong,
      children: ownProps.children
    }
  },
  (dispatch) => {
      return {
        toggleOne: (song, list) => dispatch(toggleSong(song, list))
      }
  }
  )(Artist);
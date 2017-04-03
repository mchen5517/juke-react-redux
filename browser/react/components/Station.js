import React from 'react';
import Songs from './Songs'

export default function Station (props) {
  console.log('props in station are:', props)
  const songs = props.songs;
  const currentSong = props.currentSong;
  const isPlaying = props.isPlaying;
  const toggle = props.toggleOne;

  return (
    <div>
        <h1>{props.params.genreName}</h1>
        <Songs
            songs={songs}
            currentSong={currentSong}
            isPlaying={isPlaying}
            toggleOne={toggle}
        />
    </div>
  );
}

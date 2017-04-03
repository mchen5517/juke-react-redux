import React from 'react';
import {Link} from 'react-router';

const DUMMY_STATIONS_DATA = [
  { name: '90s Hip Hop' },
  { name: 'Death Metal' },
  { name: 'Classical' }
];

export default (props) => {
  return (
    <div>
      <h3>Stations</h3>
      <div className="list-group">
      {
        Object.keys(props.stations).map(stationKey => {
          return (
            <div className="list-group-item" key={stationKey}>
              <Link to={`/stations/${stationKey}`}>{stationKey}</Link>
            </div>
          );
        })
      }
      </div>
    </div>
  )
}

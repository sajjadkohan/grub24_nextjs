import React, { useState } from 'react';
import styles from '../../styles/largeComponents/TopSectionBrowse.module.css'
import ReactMapGL, { Marker } from 'react-map-gl';

const TopMap = ({showMap}) => {

  const markers = [
    {latitude: 37.7577, longitude: -122.4376, title: 'San Francisco'},
    {latitude: 40.7128, longitude: -74.0060, title: 'New York City'},
    {latitude: 51.5074, longitude: -0.1278, title: 'London'},
  ];

  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <div className={showMap? styles.topMap+' '+styles.topMap100 :styles.topMap }>

    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={'pk.eyJ1jaWp1Y2ltYmUwMDBicmJrdDQ4ZDBkaGN4In0.sbihZCZJ56-fsFNKHXF8YQ'}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      {markers.map(marker => (
        <Marker
          key={`${marker.latitude}-${marker.longitude}`}
          latitude={marker.latitude}
          longitude={marker.longitude}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <img src="/images/marker.png" alt={marker.title} />
        </Marker>
      ))}
    </ReactMapGL>


    </div>
  )
}

export default TopMap
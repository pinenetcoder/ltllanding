import styles from '@/styles/Gmap.module.scss';
import React from 'react'
import { useRef, useCallback } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const Gmap = ({center}) => {

    const containerStyle = {
        width: '820px',
        height: '400px'
      };
      
    const mapRef = useRef(undefined)
    const onLoad = useCallback(function callback(map) {
        mapRef.current = map
      }, [])
    
    const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined
    }, [])


    return (
        <div className={styles.container}>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={17}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
        <Marker position={center} />
        </GoogleMap>
        </div>
    )
}
  export default Gmap;
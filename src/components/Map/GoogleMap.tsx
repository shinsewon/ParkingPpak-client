import React, {useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {GasStationMarker} from 'components/Map';
import {GAS_STATION_MARKERS} from 'screens/Map/data';

function GoogleMap() {
  const mapRef = useRef<MapView>(null);

  const [mapInfo, setMapInfo] = useState({
    latitude: 37.564362,
    longitude: 126.977011,
    latitudeDelta: 0.04864195044303443,
    longitudeDelta: 0.040142817690068,
  });

  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      region={mapInfo}>
      {GAS_STATION_MARKERS.map(marker => (
        <GasStationMarker
          key={marker.id}
          title={marker.name}
          brandName={marker.brandName}
          coordinate={marker.location}
          onPress={() => console.log('임시 클릭')}
        />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default GoogleMap;

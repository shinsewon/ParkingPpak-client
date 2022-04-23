import {SearchBox, Swtich} from 'components/Map';
import React, {useRef, useState} from 'react';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  MapEvent,
} from 'react-native-maps';
import CardList from '@/components/Map/CardList';
import {
  View,
  StyleSheet,
  Dimensions,
  Platform,
  Animated,
  ScrollView,
} from 'react-native';
import {GasStationMarker} from 'components/Map';
import {MARKERS, GAS_STATION_MARKERS} from './data';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const {width, height} = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

export default function ExploreScreen({
  navigation,
  route,
}: NativeStackScreenProps<any>) {
  const mapRef = useRef<MapView>(null);
  const scrollViewRef = useRef<ScrollView>(null);
  const initialMapState = {
    MARKERS,
    categories: [
      {
        name: 'Fastfood Center',
      },
      {
        name: 'Restaurant',
      },
      {
        name: 'Dineouts',
      },
      {
        name: 'Snacks Corner',
      },
      {
        name: 'Hotel',
      },
    ],
    region: {
      latitude: 37.564362,
      longitude: 126.977011,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  };

  const [mapInfo, setMapInfo] = useState(initialMapState);

  const mapAnimation = new Animated.Value(0);

  const interpolations = mapInfo.MARKERS.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: 'clamp',
    });

    return {scale};
  });

  const onMarkerPress = (
    mapEventData: MapEvent<{
      action: 'marker-press';
      id: string;
    }>,
  ) => {
    const markerID = mapEventData._targetInst.return.key;
    let x = markerID * CARD_WIDTH + markerID * 20;
    console.log('x>>>', x);
    if (Platform.OS === 'ios') {
      x = x - SPACING_FOR_CARD_INSET;
    }

    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({x: x, y: 0, animated: true});
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={mapInfo.region}>
        {mapInfo.MARKERS.map((marker, index) => {
          const scaleStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          };
          return (
            <Marker
              key={index}
              coordinate={marker.location}
              title={marker.name}
              description={marker.description}
              onPress={onMarkerPress}>
              <Animated.View style={[styles.markerWrap]}>
                <Animated.Image
                  source={require('../../assets/image/map_marker.png')}
                  style={[styles.marker, scaleStyle]}
                  resizeMode="cover"
                />
              </Animated.View>
            </Marker>
          );
        })}
        {GAS_STATION_MARKERS.map(marker => (
          <GasStationMarker
            key={marker.id}
            title={marker.name}
            brandName={marker.brandName}
            coordinate={marker.location}
          />
        ))}
      </MapView>

      <SearchBox navigation={navigation} route={route} />
      <Swtich />
      <CardList mapInfo={initialMapState} ref={scrollViewRef} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
});

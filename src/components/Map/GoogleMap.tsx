import React, {useRef, useState, useEffect} from 'react';
import {useQuery} from 'react-query';
import Geolocation from '@react-native-community/geolocation';
import proj4 from 'proj4';
import {StyleSheet, Platform, Image} from 'react-native';
import MapView, {LatLng, Marker} from 'react-native-maps';
import {GasStationMarker, MapZoomPanel} from 'components/Map';
import {FlexView} from 'components/common';
import {getRegionForZoom, getZoomFromRegion, geoCurrentLocation} from 'utils';
import {getAroundAllOilStation, OilStationType} from 'api';
import images from 'assets/images';

//아래 proj4 라이브러리는 google map의 지도 위치 표기 방법은 WGS84방식, 오피넷의 위치 표기방식은 TM128방식이므로, 이를 서로 변경해주는 작업입니다.
const WGS84 = 'WGS84';
const TM128 = 'TM128';

proj4.defs('WGS84', '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs');
proj4.defs(
  'TM128',
  '+proj=tmerc +lat_0=38 +lon_0=128 +k=0.9999 +x_0=400000 +y_0=600000 +ellps=bessel +units=m +no_defs +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43',
);

function GoogleMap() {
  const mapRef = useRef<MapView>(null);
  const [zoom, setZoom] = useState<number>(18);
  const [currentLocation, setCurrentLocation] = useState<LatLng>({
    latitude: 37.564362,
    longitude: 126.977011,
  });

  const [region, setRegion] = useState<Region>({
    latitude: 37.564362,
    longitude: 126.977011,
    latitudeDelta: 0.04864195044303443,
    longitudeDelta: 0.040142817690068,
  });
  const tmToWgs = proj4(WGS84, TM128, [region.longitude, region.latitude]);

  const aroundAllParams = {
    x: tmToWgs[0],
    y: tmToWgs[1],
    radius: 5000,
    prodcd: 'B027',
    sort: 2,
  };
  const {data: oilStations} = useQuery(['gas', tmToWgs, region], async () => {
    const response = await getAroundAllOilStation(aroundAllParams);
    return response.map((oilStation: OilStationType) => {
      const wgsToTm = proj4(TM128, WGS84, [
        oilStation.GIS_X_COOR,
        oilStation.GIS_Y_COOR,
      ]);
      (oilStation.GIS_X_COOR = wgsToTm[1]),
        (oilStation.GIS_Y_COOR = wgsToTm[0]);
      return oilStation;
    });
  });

  const onZoomIn = () => {
    if (zoom > 18) {
      setZoom(18);
    } else {
      setZoom(zoom + 1);
      const regn = getRegionForZoom(
        region.latitude,
        region.longitude,
        zoom + 1,
      );
      mapRef.current?.animateToRegion(regn, 200); // zoom 관리
    }
  };

  const onZoomOut = () => {
    if (zoom < 3) {
      setZoom(3);
    } else {
      setZoom(zoom - 1);
      const regn = getRegionForZoom(
        region.latitude,
        region.longitude,
        zoom - 1,
      );
      mapRef.current?.animateToRegion(regn, 200); // zoom 관리
    }
  };

  const onRegionChangeComplete = (newRegion: Region) => {
    setZoom(getZoomFromRegion(newRegion));
    setRegion(newRegion);
  };

  useEffect(() => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
      // ios로 처음 시작하면 위치가 샌프란시스코가 나올겁니다. 이때 ios 시뮬레이터 -> Features ->Location -> 원하는 초기 위치 변경해주시면 됩니다.
      geoCurrentLocation(setCurrentLocation);
    }
  }, []);

  return (
    <FlexView>
      {region && (
        <>
          <MapView
            ref={mapRef}
            style={styles.map}
            region={region}
            onRegionChangeComplete={onRegionChangeComplete}>
            <Marker coordinate={currentLocation}>
              <Image
                source={images.MapMarker}
                style={{width: 30, height: 30}}
                resizeMode="cover"
              />
            </Marker>
            {oilStations?.map(oilStation => (
              <GasStationMarker
                key={oilStation.UNI_ID}
                title={oilStation.OS_NM}
                brandName={oilStation.POLL_DIV_CD}
                coordinate={{
                  longitude: oilStation.GIS_Y_COOR,
                  latitude: oilStation.GIS_X_COOR,
                }}
                price={oilStation.PRICE}
                onPress={() => console.log('임시 클릭')}
              />
            ))}
          </MapView>
          <MapZoomPanel onZoomIn={onZoomIn} onZoomOut={onZoomOut} />
        </>
      )}
    </FlexView>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default GoogleMap;

import {useState, useEffect} from 'react';
import {Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {LatLng} from 'react-native-maps';

function useGetCurrentPosition() {
  const [latlng, setLatlng] = useState<LatLng>({latitude: 0, longitude: 0});

  useEffect(() => {
    if ((latlng.latitude || latlng.longitude) === 0) {
      if (Platform.OS === 'ios') {
        Geolocation.requestAuthorization();
      }
      Geolocation.getCurrentPosition(
        position => {
          const latitude = +JSON.stringify(position.coords.latitude);
          const longitude = +JSON.stringify(position.coords.longitude);
          setLatlng({latitude, longitude});
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  }, [latlng]);

  return {latlng};
}

export default useGetCurrentPosition;

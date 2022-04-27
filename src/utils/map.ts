import React, {useState, Dispatch, SetStateAction} from 'react';
import {Dimensions} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {LatLng} from 'react-native-maps';

export const getZoomFromRegion = (region: Region): number => {
  return Math.round(Math.log(360 / region.longitudeDelta) / Math.LN2);
};

export const getRegionForZoom = (
  lat: number,
  lon: number,
  zoom: number,
): Region => {
  const distanceDelta = Math.exp(Math.log(360) - zoom * Math.LN2);
  const {width, height} = Dimensions.get('window');
  const aspectRatio = width / height;
  return {
    latitude: lat,
    longitude: lon,
    latitudeDelta: distanceDelta * aspectRatio,
    longitudeDelta: distanceDelta,
  };
};

export const geoCurrentLocation = (
  setState: Dispatch<SetStateAction<LatLng>>,
) => {
  Geolocation.getCurrentPosition(
    position => {
      const latitude = +JSON.stringify(position.coords.latitude);
      const longitude = +JSON.stringify(position.coords.longitude);

      setState({latitude, longitude});
    },
    error => {
      console.log(error.code, error.message);
    },
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  );
};

import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NaverMap, SearchBox} from 'components/Map';
import {View} from 'react-native';

function MapScreen({navigation, route}: NativeStackScreenProps<any>) {
  return (
    <View>
      <SearchBox navigation={navigation} route={route} />
      <NaverMap />
    </View>
  );
}

export default MapScreen;

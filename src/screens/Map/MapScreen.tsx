import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SearchBox, Swtich, ListButton, GoogleMap} from 'components/Map';
import {View, StyleSheet} from 'react-native';

function MapScreen({navigation, route}: NativeStackScreenProps<any>) {
  return (
    <View style={styles.box}>
      <GoogleMap />
      <SearchBox navigation={navigation} route={route} />
      <Swtich />
      {/* <ListButton navigation={navigation} route={route} /> */}
    </View>
  );
}

export default MapScreen;

const styles = StyleSheet.create({box: {flex: 1}});

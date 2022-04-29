import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, StyleSheet, Pressable} from 'react-native';

type MyLocationButtonType = {
  onPress: () => void;
};

function MyLocationButton({onPress}: MyLocationButtonType) {
  const {bottom: marginBottom} = useSafeAreaInsets();
  return (
    <View style={[styles.container, {bottom: marginBottom + 20}]}>
      <Pressable style={styles.button} onPress={onPress}>
        <Icon name="my-location" size={20} color={'#888'} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignContent: 'stretch',
    position: 'absolute',
    right: 15,
    width: 40,
  },
  button: {
    height: 40,
    width: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 0.5,
    backgroundColor: '#fff',
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

export default MyLocationButton;

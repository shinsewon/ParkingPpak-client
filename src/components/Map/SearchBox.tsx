import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, Pressable, StyleSheet, Platform, Text} from 'react-native';

function SearchBox({navigation}: NativeStackScreenProps<any>) {
  const {top: marginHeight} = useSafeAreaInsets();
  const top = marginHeight;
  const goToBackScreen = () => navigation.pop();
  return (
    <View style={[styles.wrapper, {top}]}>
      <View style={styles.borderContainer}>
        <View style={{width: '15%'}}>
          <Pressable
            style={({pressed}) => [
              styles.button,
              Platform.OS === 'ios' && {opacity: pressed ? 0.6 : 1},
            ]}
            android_ripple={{color: '#fff'}}
            onPress={goToBackScreen}>
            <Icon name="arrow-back-ios" size={24} style={styles.icon} />
          </Pressable>
        </View>
        <View style={styles.rightContainer}>
          <Icon name="search" size={24} style={styles.icon} />
          <Text>주차장 또는 주유소 검색</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    padding: 20,
    zIndex: 3,
  },
  borderContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#dddddd',
    backgroundColor: '#fff',
    borderRadius: 4,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  rightContainer: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'black',
    width: 'auto',
  },
});

export default SearchBox;

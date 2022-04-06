import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {palette} from '@/constant';
import {View, Pressable, StyleSheet, Platform, Text} from 'react-native';

function SearchBox({navigation}: NativeStackScreenProps<any>) {
  const {top: marginHeight} = useSafeAreaInsets();
  const top = marginHeight;
  const goToBackScreen = () => navigation.pop();
  const goToSearchScreen = () => navigation.navigate('Search');

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
            <Icon name="arrow-back" size={24} style={styles.icon} />
          </Pressable>
        </View>
        <Pressable style={styles.rightContainer} onPress={goToSearchScreen}>
          <Text style={styles.placeholder}>장소를 검색하세요</Text>
        </Pressable>
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
    backgroundColor: palette.white,
    borderRadius: 4,
    height: 50,
    shadowColor: '#8B8B8B',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2.22,
    elevation: 3,
  },
  rightContainer: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
  },
  placeholder: {fontSize: 14, color: palette.grey_4},
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: palette.grey_3,
  },
});

export default SearchBox;

import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {palette} from '@/constant';
import {Pressable, StyleSheet, Text} from 'react-native';

export default function ListButton({navigation}: NativeStackScreenProps<any>) {
  const {bottom: marginBottom} = useSafeAreaInsets();
  const bottom = marginBottom;
  const goToListScreen = () => navigation.navigate('ListPage');

  return (
    <Pressable
      onPress={goToListScreen}
      style={[styles.wrapper, {bottom: bottom + 20}]}>
      <Icon name="format-list-bulleted" size={20} color={palette.grey_3} />
      <Text style={styles.text}>리스트로 검색</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: 150,
    height: 40,
    borderRadius: 20,
    backgroundColor: palette.white,
    shadowColor: '#8B8B8B',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    alignSelf: 'center',
    zIndex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: palette.grey_3,
    fontSize: 14,
    marginLeft: 10,
  },
});

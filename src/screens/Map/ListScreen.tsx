import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, StyleSheet, Text} from 'react-native';

export default function ListScreen({
  navigation,
  route,
}: NativeStackScreenProps<any>) {
  const goBack = () => {
    navigation.pop();
  };

  return (
    <View style={styles.box}>
      <Text onPress={goBack}>뒤로가기</Text>
      <Text>TBU....</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

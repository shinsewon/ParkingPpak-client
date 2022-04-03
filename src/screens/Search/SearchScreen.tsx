import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Text, StyleSheet} from 'react-native';

export default function SearchScreen({
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
  box: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

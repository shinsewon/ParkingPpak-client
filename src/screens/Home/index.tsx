import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function HomeStack() {
  return (
    <View style={styles.block}>
      <Text>HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1, backgroundColor: 'tomato'},
});

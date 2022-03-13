import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function DetailScreen() {
  return (
    <View style={styles.block}>
      <Text>DetailScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1, backgroundColor: 'red'},
});

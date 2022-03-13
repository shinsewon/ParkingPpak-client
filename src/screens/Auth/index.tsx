import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function AuthStack() {
  return (
    <View style={styles.block}>
      <Text>AuthStack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1, backgroundColor: 'red'},
});

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function SettingStack() {
  return (
    <View style={styles.block}>
      <Text>SettingStack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1, backgroundColor: 'green'},
});

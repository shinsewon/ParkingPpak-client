import React from 'react';
import {palette} from '@constant/index';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

export default function Loading() {
  return (
    <View style={styles.wrapper}>
      <LottieView
        source={require('@assets/lottie/loading.json')}
        autoPlay
        loop
        resizeMode="cover"
        style={styles.lottie}
        onAnimationFinish={() => console.log('animation finished')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: palette.blue_3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {
    width: '100%',
  },
});

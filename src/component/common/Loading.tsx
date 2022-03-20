import React from 'react';
import {palette} from '@constant/index';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

export default function Loading() {
  return (
    <View style={styles.wrapper}>
      <LottieView
        // 이 친구는 지금 실행하면 에러가나네요... 추구에 이 친구로 변경해야합니다.
        // source={require('@assets/lottie/loading.json')}
        source={require('@/assets/lottie/loading.json')}
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

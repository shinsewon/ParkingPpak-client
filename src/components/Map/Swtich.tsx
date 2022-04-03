import {palette} from '@/constant';
import {View, Pressable, StyleSheet, Animated} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';

export default function TypeSwtich() {
  const animation = useRef(new Animated.Value(0)).current;
  const [activeType, setActiveType] = useState<ContentType>('PARKING_LOT');
  const toggleSwitch = (type: ContentType) => setActiveType(type);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: activeType === 'PARKING_LOT' ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      // 애니메이션 처리 완료 후 실행할 작업
    });
  }, [activeType]);

  return (
    <View style={[styles.container]}>
      <Pressable
        style={[styles.textWrapper, {left: 5}]}
        onPress={() => toggleSwitch('PARKING_LOT')}
        hitSlop={{top: 10, bottom: 10}}>
        <Animated.Text
          style={[
            styles.text,
            {
              color: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [palette.blue_2, palette.white],
              }),
            },
          ]}>
          주차장
        </Animated.Text>
      </Pressable>
      <Pressable
        style={[styles.textWrapper, {right: 5}]}
        onPress={() => toggleSwitch('GAS_STATION')}
        hitSlop={{top: 10, bottom: 10}}>
        <Animated.Text
          style={[
            styles.text,
            {
              color: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [palette.white, palette.blue_2],
              }),
            },
          ]}>
          주유소
        </Animated.Text>
      </Pressable>
      <Animated.View
        style={[
          styles.active,
          {
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [5, 70],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: 150,
    backgroundColor: palette.blue_2,
    top: 130,
    padding: 20,
    zIndex: 3,
    borderRadius: 30,
    alignSelf: 'center',
  },
  textWrapper: {
    width: 75,
    zIndex: 5,
    position: 'absolute',
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: palette.white,
  },
  active: {
    position: 'absolute',
    backgroundColor: palette.white,
    top: 5,
    width: 75,
    left: 0,
    borderRadius: 20,
    height: 30,
    zIndex: 4,
  },
});

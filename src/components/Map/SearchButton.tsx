import React, {useRef, useEffect} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {palette} from '@/constant';
import {
  Pressable,
  StyleSheet,
  Text,
  Animated,
  ActivityIndicator,
} from 'react-native';

type SearchButtonType = {
  icon: string;
  name: string;
  size?: number;
  isFetching: boolean;
  onPress: () => void;
};

export default function SearchButton({
  icon,
  name,
  size = 20,
  isFetching,
  onPress,
}: SearchButtonType) {
  const width = useRef(new Animated.Value(150)).current;
  const {bottom: marginBottom} = useSafeAreaInsets();
  const bottom = marginBottom;

  useEffect(() => {
    if (isFetching) {
      Animated.timing(width, {
        useNativeDriver: false,
        toValue: 50,
        duration: 100,
      }).start();
    } else {
      Animated.timing(width, {
        useNativeDriver: false,
        toValue: 150,
        duration: 100,
      }).start();
    }
  }, [isFetching]);

  return (
    <Animated.View style={[styles.wrapper, {bottom: bottom + 20, width}]}>
      {!isFetching ? (
        <Pressable onPress={onPress} style={styles.button}>
          <Icon name={icon} size={size} color={palette.white} />
          <Text style={styles.text}>{name}</Text>
        </Pressable>
      ) : (
        <ActivityIndicator color={palette.white} />
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    height: 40,
    borderRadius: 20,
    backgroundColor: palette.blue_2,
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
  button: {
    width: '100%',
    alignSelf: 'center',
    zIndex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: palette.white,
    fontSize: 14,
    marginLeft: 10,
  },
});

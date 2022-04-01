import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {useKakaoAuthActions} from 'hooks';
function MyProfileScreen() {
  const navigation = useNavigation();
  const {logout} = useKakaoAuthActions();

  useEffect(() => {
    navigation.setOptions({
      title: '프로필',
    });
  }, []);

  const onLogout = () => logout();

  return (
    <View style={styles.block}>
      <Text>프로필</Text>
      <Pressable style={styles.button} onPress={onLogout}>
        <Text>로그아웃</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'blue',
    marginVertical: 20,
  },
});

export default MyProfileScreen;

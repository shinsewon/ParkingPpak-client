import React from 'react';
import palette from '../../constant/palette';
import {AuthStackNavigationProps} from './index';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';

export default function RegisterScreen() {
  const navigation = useNavigation<AuthStackNavigationProps>();

  const onPressLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.block}>
      <View style={styles.logo}>
        <Text>로고</Text>
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          returnKeyType="next"
          placeholder="이메일"
        />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          textContentType="password"
          returnKeyType="done"
          placeholder="비밀번호"
          secureTextEntry
        />
      </View>
      <Pressable style={styles.loginButton}>
        <Text style={styles.login}>회원가입</Text>
      </Pressable>
      <Pressable style={styles.registerWrapper} onPress={onPressLogin}>
        <Text style={styles.appName}>파킹빡</Text>
        <Text style={styles.register}>로그인</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 140,
  },
  logo: {
    height: 100,
    backgroundColor: palette.grey_5,
    marginBottom: 20,
  },
  inputWrapper: {
    height: 60,
    borderColor: palette.grey_6,
    marginBottom: 15,
    borderRadius: 40,
    borderWidth: 1,
    paddingHorizontal: 20,
  },
  input: {
    height: 60,
    fontSize: 18,
  },
  loginButton: {
    borderRadius: 40,
    backgroundColor: palette.blue_4,
    height: 65,
  },
  login: {
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 65,
    color: 'white',
  },
  registerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    height: 50,
  },
  appName: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 50,
    marginRight: 5,
    color: palette.blue_1,
  },
  register: {fontSize: 16, lineHeight: 50, color: palette.grey_1},
});

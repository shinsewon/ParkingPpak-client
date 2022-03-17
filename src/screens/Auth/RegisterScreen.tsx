import React, {useRef} from 'react';
import {palette} from '@constant/index';
import {useInput} from 'hooks';
import {BorderInput} from 'components/common';
import {AuthStackNavigationProps} from './index';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export interface InputProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterScreen() {
  const [{name, email, password, confirmPassword}, onChange] =
    useInput<InputProps>({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  const navigation = useNavigation<AuthStackNavigationProps>();
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const onPressLogin = () => {
    navigation.navigate('Login');
  };

  console.log('email>>', email);
  console.log('password>>', password);

  return (
    <KeyboardAvoidingView
      style={styles.KeyboardAvoidingView}
      behavior={Platform.select({ios: 'padding'})}>
      <SafeAreaView>
        <View style={styles.logo}>
          <Text>로고</Text>
        </View>
        <BorderInput
          placeholder="이름"
          returnKeyType="next"
          value={name}
          onChangeText={onChange('name')}
          onSubmitEditing={() => emailRef.current?.focus()}
        />
        <BorderInput
          placeholder="이메일"
          returnKeyType="next"
          value={email}
          ref={emailRef}
          onChangeText={onChange('email')}
        />

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            textContentType="password"
            returnKeyType="done"
            placeholder="비밀번호"
            secureTextEntry
            value={password}
            onChangeText={onChange('password')}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            textContentType="password"
            returnKeyType="done"
            placeholder="비밀번호 확인"
            secureTextEntry
            value={confirmPassword}
            onChangeText={onChange('confirmPassword')}
          />
        </View>
        <Pressable style={styles.loginButton}>
          <Text style={styles.login}>회원가입</Text>
        </Pressable>
        <Pressable style={styles.registerWrapper} onPress={onPressLogin}>
          <Text style={styles.appName}>파킹빡</Text>
          <Text style={styles.register}>로그인</Text>
        </Pressable>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  KeyboardAvoidingView: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 100,
  },

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

import React from 'react';
import {login} from '@react-native-seoul/kakao-login';
import {AuthStackNavigationProps} from './index';
import {palette} from '@constant/index';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AntIcon from 'react-native-vector-icons/AntDesign';

export default function LoginScreen() {
  const navigation = useNavigation<AuthStackNavigationProps>();

  const onPressRegister = () => {
    navigation.navigate('Register');
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('이메일 필수'),
    password: Yup.string().required('이메일 필수'),
    // .matches(
    //   PASSWORD_VALIDATION,
    //   '형식에 맞게 입력해주세요'
    // ),
  });

  const initialValues: LoginRequest = {
    email: '',
    password: '',
  };

  const signInWithKakao = async () => {
    const token = await login();
    console.log('token>>', token);
  };

  return (
    <View style={styles.block}>
      <View style={styles.logo}>
        <Text>로고</Text>
      </View>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: LoginRequest) => {
          console.log(values);
        }}
        validateOnMount
        validationSchema={validationSchema}>
        {({values, handleChange, handleSubmit, isValid}) => (
          <>
            <View style={[styles.inputWrapper]}>
              <TextInput
                style={styles.input}
                value={values.email}
                onChangeText={handleChange('email')}
                returnKeyType="next"
                placeholder="이메일"
              />
            </View>
            <View style={[styles.inputWrapper]}>
              <TextInput
                style={styles.input}
                textContentType="password"
                returnKeyType="done"
                placeholder="비밀번호"
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry
              />
            </View>
            <Pressable
              style={[styles.loginButton, !isValid && styles.disable]}
              disabled={!isValid}
              onPress={handleSubmit}>
              <Text style={styles.login}>로그인</Text>
            </Pressable>
          </>
        )}
      </Formik>
      <Pressable style={styles.registerWrapper} onPress={onPressRegister}>
        <Text style={styles.appName}>파킹빡</Text>
        <Text style={styles.register}>회원가입</Text>
      </Pressable>
      <View style={styles.socialButtons}>
        <Pressable style={styles.social}>
          <ZocialIcon
            name="facebook"
            color={palette.blue_1}
            size={20}
            style={{marginRight: 6}}
          />
        </Pressable>
        <Pressable style={styles.social} onPress={signInWithKakao}>
          <MaterialIcon name="chat" color={palette.yellow_1} size={24} />
        </Pressable>
        <Pressable style={styles.social}>
          <AntIcon name="google" color="#2385f4" size={20} />
        </Pressable>
        <Pressable style={styles.social}>
          <MaterialIcon name="alpha-n" color={palette.green_1} size={36} />
        </Pressable>
      </View>
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
  disable: {
    backgroundColor: palette.grey_5,
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
  socialButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 30,
    marginTop: 10,
  },
  social: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: palette.grey_6,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
});

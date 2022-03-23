import React, {useRef} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {palette} from '@constant/index';
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

type RegisterForm = RegisterRequest & {confirmPassword: string};

export default function RegisterScreen() {
  const navigation = useNavigation<AuthStackNavigationProps>();
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('이름은 필수입니다.'),
    email: Yup.string()
      .email('유효하지 않은 이메일입니다.')
      .required('이메일은 필수입니다.'),
    password: Yup.string()
      .required('비밀번호 입력은 필수입니다.')
      .matches(
        /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{8,16}$/,
        '비밀번호는 반드시 8~16자이며, 영문, 숫자, 특수문자를 포함해야 합니다.',
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
      .required('비밀번호 입력은 필수 입니다.'),
  });

  const initialValues: RegisterForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const onPressLogin = () => navigation.pop();

  return (
    <KeyboardAvoidingView
      style={styles.KeyboardAvoidingView}
      behavior={Platform.select({ios: 'padding'})}>
      <SafeAreaView style={styles.safeView}>
        <View style={styles.logo}>
          <Text>로고</Text>
        </View>

        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            console.log('values>>', values);
          }}
          validateOnMount
          validationSchema={validationSchema}>
          {({
            values,
            handleChange,
            handleSubmit,
            handleBlur,
            isValid,
            errors,
            touched,
          }) => {
            console.log('errors>>', errors);
            console.log('touched>>', touched);
            return (
              <>
                <TextInput
                  style={styles.input}
                  value={values.name}
                  returnKeyType="next"
                  placeholder="이름"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  onSubmitEditing={() => emailRef.current?.focus()}
                />
                {errors.name && touched.name && (
                  <Text style={{color: 'red'}}>{errors.name}</Text>
                )}
                <TextInput
                  ref={emailRef}
                  style={styles.input}
                  value={values.email}
                  returnKeyType="next"
                  placeholder="이메일"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  onSubmitEditing={() => passwordRef.current?.focus()}
                />
                {errors.email && touched.email && (
                  <Text style={{color: 'red'}}>{errors.email}</Text>
                )}

                <TextInput
                  ref={passwordRef}
                  style={styles.input}
                  value={values.password}
                  returnKeyType="next"
                  placeholder="비밀번호"
                  secureTextEntry
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  onSubmitEditing={() => confirmPasswordRef.current?.focus()}
                />
                {errors.password && touched.password && (
                  <Text style={{color: 'red'}}>{errors.password}</Text>
                )}
                <TextInput
                  ref={confirmPasswordRef}
                  style={styles.input}
                  value={values.confirmPassword}
                  returnKeyType="done"
                  placeholder="비밀번호 확인"
                  secureTextEntry
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <Text style={{color: 'red'}}>{errors.confirmPassword}</Text>
                )}
                <Pressable
                  style={[styles.registerButton, !isValid && styles.disable]}
                  disabled={!isValid}
                  onPress={handleSubmit}>
                  <Text style={styles.register}>회원가입</Text>
                </Pressable>
              </>
            );
          }}
        </Formik>
        <Pressable style={styles.registerWrapper} onPress={onPressLogin}>
          <Text style={styles.appName}>뒤로가기</Text>
        </Pressable>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  KeyboardAvoidingView: {
    flex: 1,
  },
  safeView: {
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
  disable: {
    backgroundColor: palette.grey_5,
  },
  input: {
    height: 60,
    fontSize: 18,
    borderColor: palette.grey_6,
    marginBottom: 15,
    borderRadius: 40,
    borderWidth: 1,
    paddingHorizontal: 20,
  },
  registerButton: {
    borderRadius: 40,
    backgroundColor: palette.blue_4,
    height: 65,
  },
  register: {
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
});

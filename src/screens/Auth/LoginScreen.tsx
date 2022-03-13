import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';

type AuthStackNavigationProp = NativeStackNavigationProp<AuthStackParams>;

export default function LoginScreen() {
  const navigation = useNavigation<AuthStackNavigationProp>();

  const onPressRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.block}>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>이메일</Text>
        <TextInput style={styles.input} returnKeyType="next" />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>비밀번호</Text>
        <TextInput
          style={styles.input}
          textContentType="password"
          returnKeyType="done"
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Pressable style={styles.button} onPress={onPressRegister}>
          <Text style={styles.buttonText}>회원가입하러가기</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>로그인</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  inputWrapper: {height: 100},
  inputLabel: {fontSize: 20},
  input: {
    marginTop: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    fontSize: 20,
    paddingVertical: 10,
  },
  buttonWrapper: {justifyContent: 'space-around', flexDirection: 'row'},
  button: {
    width: '40%',
    height: 50,
    backgroundColor: 'green',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
  },
});

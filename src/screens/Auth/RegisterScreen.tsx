import React from 'react';
import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';

export default function RegisterScreen() {
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
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>회원가입</Text>
      </Pressable>
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
  button: {
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

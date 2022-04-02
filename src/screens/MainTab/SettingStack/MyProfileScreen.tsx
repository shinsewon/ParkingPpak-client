import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, Pressable} from 'react-native';
import {useKakaoAuthActions} from 'hooks';
import {
  GridColumn,
  FlexView,
  SizedView,
  TextComponent,
} from 'components/common';

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
    <FlexView>
      <GridColumn />
      <FlexView flexDirection="column" flexSet={['center', 'center']}>
        <TextComponent style={{marginBottom: 20}}>프로필</TextComponent>
        <SizedView testBorder Col={4} Gutter={3} height="auto">
          <Pressable style={styles.button} onPress={onLogout}>
            <Text>로그아웃</Text>
          </Pressable>
        </SizedView>
      </FlexView>
    </FlexView>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'blue',
  },
});

export default MyProfileScreen;

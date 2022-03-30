import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Container from '@components/common/Container';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import SVG from '@assets/SVG';
import OilPrice from '@components/Oil/OilPrice';
import {palette} from '@/constant';

// type HomeScreenProps = {};

export default function HomeScreen({
  navigation,
  route,
}: NativeStackScreenProps<any>) {
  return (
    <ScrollView
      style={styles.block}
      contentContainerStyle={{paddingBottom: 100}}>
      <View style={[styles.section, {height: 294}]}>
        <Text style={styles.sectionTitle}>
          어떤 주차장/주유소를 찾고계세요?
        </Text>
        <View
          style={[styles.containerWrapper, {marginBottom: 16, height: 120}]}>
          <Container
            style={{
              ...styles.container,
              flex: 1,
              marginRight: 16,
            }}>
            <Text style={styles.containerTitle}>검색</Text>
            <SVG
              name="home-search"
              width={44}
              height={44}
              style={styles.containerIcon}
            />
          </Container>
          <Container
            style={{
              ...styles.container,
              flex: 3,
            }}
            onPress={() => navigation.navigate('Map')}>
            <Text style={styles.containerTitle}>지도에서 찾기</Text>
            <SVG
              name="home-map"
              width={65}
              height={65}
              style={styles.containerIcon}
            />
          </Container>
        </View>
        <View style={[styles.containerWrapper, {height: 120}]}>
          <Container
            style={{
              ...styles.container,
              flex: 1,
              marginRight: 16,
            }}>
            <Text style={styles.containerTitle}>단골 주유소</Text>
            <SVG
              name="home-oil"
              width={65}
              height={65}
              style={styles.containerIcon}
            />
          </Container>
          <Container
            style={{
              ...styles.container,
              flex: 1,
            }}>
            <Text style={styles.containerTitle}>단골 주차장</Text>
            <SVG
              name="home-parking"
              width={65}
              height={65}
              style={styles.containerIcon}
            />
          </Container>
        </View>
      </View>
      <View style={[styles.section, {marginTop: 40}]}>
        <Text style={[styles.sectionTitle, {marginBottom: 0}]}>
          이런 주차장/주유소는 어떠세요?
        </Text>
        <Text style={styles.sectionTitle}>**님께 딱맞는 곳을 추천해드려요</Text>
        <View style={[styles.containerWrapper, {height: 88}]}>
          <Container
            style={{
              ...styles.container,
              flex: 1,
              marginRight: 16,
            }}>
            <Text style={styles.containerTitle}>주차장</Text>
            <Text style={styles.onePick}>One Pick</Text>
          </Container>
          <Container
            style={{
              ...styles.container,
              flex: 1,
            }}>
            <Text style={styles.containerTitle}>주유소</Text>
            <Text style={styles.onePick}>One Pick</Text>
          </Container>
        </View>
      </View>
      <View style={[styles.section, {marginTop: 40, marginBottom: 100}]}>
        <Text style={[styles.sectionTitle]}>오늘의 유가</Text>
        <OilPrice />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 16,
  },
  section: {
    width: '100%',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: palette.grey_2,
    marginBottom: 16,
  },
  containerWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  container: {padding: 16},
  containerTitle: {fontSize: 18, fontWeight: 'bold', color: palette.grey_1},
  containerIcon: {position: 'absolute', bottom: 8, right: 8},
  onePick: {
    color: palette.blue_2,
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 7,
  },
});

import React, {useRef, useEffect, forwardRef} from 'react';
import MapView from 'react-native-maps';

import {
  View,
  StyleSheet,
  Dimensions,
  Platform,
  Text,
  Animated,
  ScrollView,
  Image,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;
const CARD_HEIGHT = height / 4;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

type CardProps = {
  mapInfo: MapInfo;
};

const CardList = forwardRef<ScrollView, CardProps>(({mapInfo}, ref) => {
  const _map = useRef<MapView>(null);

  let mapIndex = 0;
  const mapAnimation = new Animated.Value(0);

  useEffect(() => {
    let regionTimeout: NodeJS.Timeout;
    mapAnimation.addListener(({value}) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3);
      if (index >= mapInfo.MARKERS.length) {
        index = mapInfo.MARKERS.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      //스크롤할 때마다 clearTimeout을 실행하고, 즉시 10밀리초 동안 시간 초과를 설정합니다. 만약 우리가 실제로 실행되는 setTimeout 스크롤을 멈추면 다음 지역에 있는지 알아보고 그렇지 않으면 애니메이션을 만들지 않는다. 우리는 우리가 현재 지수화하려는 지수를 저장함으로써 그것을 한다.

      regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const {location} = mapInfo.MARKERS[index];
          if (_map.current) {
            _map.current.animateToRegion(
              {
                ...location,
                latitudeDelta: mapInfo.region.latitudeDelta,
                longitudeDelta: mapInfo.region.longitudeDelta,
              },
              350,
            );
          }
        }
      }, 10);
    });
    return () => {
      if (regionTimeout) {
        clearTimeout(regionTimeout);
      }
    };
  }, []);

  return (
    <Animated.ScrollView
      ref={ref}
      horizontal
      pagingEnabled
      scrollEventThrottle={1}
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH + 20} //Android에서 스크롤 보기가 부드럽게 전환되고 잠금 지점이 없다는 것을 의미합니다. iOS에서는 각 카드에 잠깁니다.
      snapToAlignment="center"
      style={styles.scrollView}
      contentInset={{
        top: 0,
        left: SPACING_FOR_CARD_INSET,
        bottom: 0,
        right: SPACING_FOR_CARD_INSET,
      }}
      contentContainerStyle={{
        paddingHorizontal:
          Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
      }}
      onScroll={Animated.event(
        //Animated.event는 contentOffset의 x값으로 애니메이션을 자동으로 업데이트합니다. 우리가 얼마나 멀리 스크롤했는지에 대한 애니메이션을 설정한다는 것을 의미합니다.
        [
          {
            nativeEvent: {
              contentOffset: {
                x: mapAnimation,
              },
            },
          },
        ],
        {useNativeDriver: true},
      )}>
      {mapInfo.MARKERS.map((marker: CustomMarker, index: number) => (
        <View style={styles.card} key={index}>
          <Image
            source={{uri: marker.src}}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.textContent}>
            <Text numberOfLines={1} style={styles.cardtitle}>
              {/*numberOfLines 속성을 사용하여 각 텍스트 요소를 한 줄로 잠그고 한 줄을 초과하면 생략합니다. */}
              {marker.name}
            </Text>
            <Text numberOfLines={1} style={styles.cardDescription}>
              {marker.description}
            </Text>
          </View>
        </View>
      ))}
    </Animated.ScrollView>
  );
});

CardList.displayName = 'cardList';

const styles = StyleSheet.create({
  scrollView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {width: 2, height: -2},
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden',
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 12,
    color: '#444',
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 5,
  },
  signIn: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  textSign: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
export default CardList;

import React from 'react';
import SVG from 'assets/SVG';
import Images from 'assets/images';
import {Image} from 'react-native';
import {Marker, LatLng} from 'react-native-maps';
import {FlexView, BorderView, TextComponent} from 'components/common';

type GasStationType = {
  coordinate: LatLng;
  title?: string;
  description?: string;
  brandName?: string;
  onPress?: () => void;
};

function GasStationMarker({
  coordinate,
  title,
  description,
  brandName = 'SOIL',
  onPress = () => console.log('클릭'),
}: GasStationType) {
  const brandList = {
    SKC: 'SKC',
    GSC: 'GSC',
    HDO: 'HDO',
    SOIL: 'SOIL',
    FRUGAL: 'FRUGAL',
    GS: 'GS',
  };

  const brand = brandList[brandName as keyof typeof GasStationMarker];

  const getBrandLogo = (brand: string) => {
    if (brand === 'SKC' || brand === 'SOIL') {
      return <SVG name={brand} width={30} height={30} />;
    }
    if (brand === 'HDO' || brand === 'FRUGAL' || brand === 'GS') {
      return <Image source={Images[brand]} style={{width: 25, height: 25}} />;
    }
  };

  return (
    <Marker
      coordinate={coordinate}
      title={title}
      description={description}
      onPress={onPress}>
      <BorderView
        style={{
          width: 90,
          height: 40,
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        }}
        paddingHorizontal={5}
        borderRadius={4}
        borderColor={'#ddd'}>
        <FlexView flexSet={['space-between', 'center', 'center']}>
          {getBrandLogo(brand)}
          <TextComponent fontSize={16} fontWeight={'bold'}>
            1,934
          </TextComponent>
        </FlexView>
      </BorderView>
    </Marker>
  );
}

export default GasStationMarker;

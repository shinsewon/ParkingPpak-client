import React from 'react';
import SVG from 'assets/SVG';
import Images from 'assets/images';
import {Image} from 'react-native';
import {Marker, LatLng} from 'react-native-maps';
import {FlexView, BorderView, TextComponent} from 'components/common';

type OilStationType = {
  coordinate: LatLng;
  title: string;
  brandName: string;
  price: number;
  onPress: () => void;
};

function OilStationMarker({
  coordinate,
  title,
  brandName,
  onPress = () => console.log('클릭'),
  price,
}: OilStationType) {
  const totalOilStationBrandList: Record<OIL_STATIONS, OIL_STATIONS> = {
    SKE: 'SKE',
    HDO: 'HDO',
    SOL: 'SOL',
    FRUGAL: 'FRUGAL',
    GSC: 'GSC',
    RTX: 'RTX',
    NHO: 'NHO',
    RTO: 'RTO',
    ETC: 'ETC',
  };

  const noSvgImageBrandList: Pick<
    typeof totalOilStationBrandList,
    'HDO' | 'FRUGAL' | 'GSC' | 'NHO' | 'RTO' | 'RTX' | 'ETC'
  > = {
    HDO: 'HDO',
    FRUGAL: 'FRUGAL',
    GSC: 'GSC',
    NHO: 'NHO',
    RTO: 'RTO',
    RTX: 'RTX',
    ETC: 'ETC',
  };

  const brand =
    totalOilStationBrandList[
      brandName as keyof typeof totalOilStationBrandList
    ];

  const getBrandLogo = (brand: string) => {
    if (brand === 'SKE' || brand === 'SOL') {
      return <SVG name={brand} width={30} height={30} />;
    }
    return (
      <Image
        source={Images[brand as keyof typeof noSvgImageBrandList]}
        style={{width: 25, height: 25}}
      />
    );
  };

  return (
    <Marker coordinate={coordinate} title={title} onPress={onPress}>
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
            {price.toLocaleString()}
          </TextComponent>
        </FlexView>
      </BorderView>
    </Marker>
  );
}

export default OilStationMarker;

import React from 'react';
import Container from '@components/common/Container';
import {StyleSheet} from 'react-native';
import OilItem from './OilItem';

const data: OilInfo[] = [
  {type: 'gasoline', price: '2,0000.59', diff: 1.33, percentile: 0.07},
  {
    type: 'premiumGasoline',
    price: '2,0000.59',
    diff: 1.33,
    percentile: 0.07,
  },
  {type: 'diesel', price: '2,0000.59', diff: 1.33, percentile: 0.07},
];
export default function OilPrice() {
  return (
    <Container
      style={{
        ...styles.container,
        flex: 1,
      }}>
      {data.map((oil, index, list) => (
        <OilItem {...oil} key={oil.type} isLast={index === list.length - 1} />
      ))}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {paddingVertical: 4, paddingHorizontal: 16},
});

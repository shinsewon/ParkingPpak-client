import React from 'react';
import Container from '@components/common/Container';
import {StyleSheet, View, FlatList} from 'react-native';
import OilItem from './OilItem';
import {palette} from '@/constant';

export default function OilPrice() {
  return (
    <Container
      style={{
        ...styles.container,
        flex: 1,
      }}>
      <FlatList<OilInfo>
        data={[
          {type: 'gasoline', price: '2,0000.59', diff: 1.33, percentile: 0.07},
          {
            type: 'premiumGasoline',
            price: '2,0000.59',
            diff: 1.33,
            percentile: 0.07,
          },
          {type: 'diesel', price: '2,0000.59', diff: 1.33, percentile: 0.07},
        ]}
        renderItem={({item}) => <OilItem {...item} />}
        nestedScrollEnabled
        keyExtractor={({type}) => type}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {paddingVertical: 4},
  seperator: {
    flex: 1,
    height: 1,
    backgroundColor: palette.grey_6,
    marginHorizontal: 16,
  },
});

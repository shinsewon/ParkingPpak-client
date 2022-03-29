import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SVG from '@assets/SVG';
import {palette} from '@/constant';

type OilItemProps = OilInfo & {
  isLast?: boolean;
};

export default function OilItem({
  type,
  price,
  diff,
  percentile,
  isLast = false,
}: OilItemProps) {
  const positive = true; // 변화율이 양일때 true

  return (
    <View style={[styles.container, !isLast && styles.borderBottom]}>
      <Text style={styles.type}>{type}</Text>
      <Text style={[styles.price, textStyles(positive).text]}>{price}</Text>
      <SVG
        name="arrow"
        width={18}
        height={18}
        style={iconStyles(positive).icon}
        fill={positive ? palette.red_1 : palette.blue_2}
      />
      <Text style={[textStyles(positive).text]}>{diff}</Text>
      <Text style={[styles.percentile, textStyles(positive).text]}>
        ({percentile}%)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
  },
  borderBottom: {borderBottomColor: palette.grey_6, borderBottomWidth: 1},
  type: {color: palette.grey_2, fontSize: 18, fontWeight: 'bold', flex: 1},
  price: {
    marginLeft: 6,
  },
  percentile: {
    marginLeft: 2,
  },
});

const textStyles = (positive: boolean) =>
  StyleSheet.create({
    text: {
      color: positive ? palette.red_1 : palette.blue_2,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

const iconStyles = (positive: boolean) =>
  StyleSheet.create({
    icon: {
      transform: positive ? [{rotate: '180deg'}] : undefined,
      marginHorizontal: 6,
    },
  });

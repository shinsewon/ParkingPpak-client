import {useMemo} from 'react';
import {Dimensions} from 'react-native';

function useGetColumnGutter() {
  const gutter = 16;
  const col = 12;
  const width = Math.floor(Dimensions.get('window').width - gutter * 2);
  const colWidth = (width - gutter * (col - 1)) / col;
  const colNumber = Array.from({length: col}, (_, i) => i + 1);

  return useMemo(
    () => ({
      gutter,
      col,
      width,
      colWidth,
      colNumber,
    }),
    [gutter, col, width, colWidth, colNumber],
  );
}

export default useGetColumnGutter;

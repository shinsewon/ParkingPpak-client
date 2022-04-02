import {useMemo} from 'react';
import {Dimensions} from 'react-native';

function useGetColumnGutter() {
  const gutter = 16; // gutter default 값은 16
  const col = 12; // column default 값은 12, 줄여서 col이라고 표기했습니다.
  const width = Math.floor(Dimensions.get('window').width - gutter * 2); //모바일에서 보여지는 화면의 양측 gutter를 제외한 width
  const colWidth = (width - gutter * (col - 1)) / col; // 한 개의 column의 너비
  const colNumber = Array.from({length: col}, (_, i) => i + 1); // column의 갯 수

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

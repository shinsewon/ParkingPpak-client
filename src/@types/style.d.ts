export {};

declare global {
  export type FlexSet =
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';

  export type AlignItems =
    | 'center'
    | 'baseline'
    | 'flex-end'
    | 'flex-start'
    | 'stretch';

  export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';

  export type FlexDirection =
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse';

  type CSSMarginType = {
    marginLeft?: string;
    marginRight?: string;
    marginHorizontal?: number;
    marginVertical?: number;
  };

  type CSSPaddingType = {
    paddingLeft?: string;
    paddingRight?: string;
    paddingHorizontal?: number;
    paddingVertical?: number;
  };

  type FlexSetType = {
    justifyContent?: string;
    alignItems?: string;
    alignContent?: string;
  };

  type ComponentCssType = CSSMarginType &
    CSSPaddingType & {
      flexDirection?: FlexDirection;
      flexWrap?: FlexWrap;
      flexSet?: [FlexSet?, AlignItems?, FlexSet?];
      children?: React.ReactNode;
      testBorder?: boolean;
      Gutter?: number;
      Col?: number;
      height?: number | string;
      width?: number | string;
      style?: any;
    };

  type TextType = {
    fontSize?: number;
    fontWeight?: number | string;
    lineHeight?: number;
    color?: string;
    children: React.ReactNode;
    style?: any;
  };
}

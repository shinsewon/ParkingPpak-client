export const getMarginHorizontalStyle = (marginHorizontal?: number) => {
  const marginHorizontalStyle: CSSMarginType = {};

  if (marginHorizontal === 0) {
    marginHorizontalStyle.marginLeft = 'auto';
    marginHorizontalStyle.marginRight = 'auto';
  } else {
    marginHorizontalStyle.marginHorizontal = marginHorizontal;
  }
  return marginHorizontalStyle;
};

export const getMarginVerticalStyle = (marginVertical?: number) => {
  const marginVerticalStyle: CSSMarginType = {};

  if (marginVertical) {
    marginVerticalStyle.marginVertical = marginVertical;
  }
  return marginVerticalStyle;
};

export const getPaddingHorizontalStyle = (paddingHorizontal?: number) => {
  const paddingHorizontalStyle: CSSPaddingType = {};

  if (paddingHorizontal === 0) {
    paddingHorizontalStyle.paddingLeft = 'auto';
    paddingHorizontalStyle.paddingRight = 'auto';
  } else {
    paddingHorizontalStyle.paddingHorizontal = paddingHorizontal;
  }

  return paddingHorizontalStyle;
};

export const getPaddingVerticalStyle = (paddingVertical?: number) => {
  const paddingVerticalStyle: CSSPaddingType = {};

  if (paddingVertical) {
    paddingVerticalStyle.paddingVertical;
  }
    return paddingVerticalStyle;
};

export const getFlexSetStyle = (flexSet: [FlexSet?, AlignItems?, FlexSet?]) => {
  const flexSetValue: FlexSetType = {};

  if (flexSet.length === 1) {
    flexSetValue.justifyContent = `${flexSet[0]}`;
  }

  if (flexSet.length === 2) {
    flexSetValue.justifyContent = `${flexSet[0]}`;
    flexSetValue.alignItems = `${flexSet[1]}`;
  }

  if (flexSet.length === 3) {
    flexSetValue.justifyContent = `${flexSet[0]}`;
    flexSetValue.alignItems = `${flexSet[1]}`;
    flexSetValue.alignContent = `${flexSet[2]}`;
  }

  return flexSetValue;
};

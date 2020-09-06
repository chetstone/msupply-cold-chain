import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

import { UI_ASSERTIONS, STYLE, COLOUR } from '~constants';
import { Centered } from '~layouts';

const style = {
  width: STYLE.WIDTH.HALF_CIRCLE,
  height: STYLE.HEIGHT.HALF_CIRCLE,
  backgroundColor: COLOUR.BACKGROUND_ONE,
};

const rightStyle = {
  borderBottomLeftRadius: 50,
  borderTopLeftRadius: 50,
};

const leftStyle = {
  borderBottomRightRadius: 50,
  borderTopRightRadius: 50,
};

export const HalfCircleButton = ({ direction, onPress, Icon }) => {
  if (!(direction === 'left' || direction === 'right')) {
    throw new Error(UI_ASSERTIONS.HALF_CIRCLE_DIRECTION);
  }
  const directionStyle = direction === 'left' ? leftStyle : rightStyle;
  const internalStyle = { ...style, ...directionStyle };

  return (
    <BorderlessButton onPress={onPress}>
      <Centered style={internalStyle}>{Icon}</Centered>
    </BorderlessButton>
  );
};
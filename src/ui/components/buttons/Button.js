import { Pressable } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { STYLE, COLOUR } from '~constants';
import { BoldText } from '~presentation/typography';
import { Centered } from '~layouts';

const style = {
  container: {
    standard: {
      borderRadius: STYLE.BORDER.RADIUS.NORMAL,
      borderWidth: STYLE.BORDER.WIDTH.NORMAL,
      width: STYLE.WIDTH.NORMAL_BUTTON,
      height: STYLE.HEIGHT.NORMAL_BUTTON,
      borderColor: COLOUR.OFF_WHITE,
    },
    dark: {
      borderRadius: STYLE.BORDER.RADIUS.NORMAL,
      borderWidth: STYLE.BORDER.WIDTH.NORMAL,
      width: STYLE.WIDTH.NORMAL_BUTTON,
      height: STYLE.HEIGHT.NORMAL_BUTTON,
      borderColor: COLOUR.GREY_ONE,
    },
  },
};

export const Button = ({ text, onPress, isInModal = false, variant = 'standard' }) => {
  const Container = isInModal ? BorderlessButton : Pressable;

  return (
    <Container onPress={onPress}>
      <Centered style={style.container[variant]}>
        <BoldText colour={variant === 'standard' ? COLOUR.OFF_WHITE : COLOUR.GREY_ONE}>
          {text}
        </BoldText>
      </Centered>
    </Container>
  );
};
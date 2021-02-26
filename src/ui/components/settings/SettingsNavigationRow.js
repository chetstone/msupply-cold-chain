import { Icon as AppIcon } from '~presentation/icons';
import { SettingsItem } from './SettingsItem';
import { COLOUR } from '~constants';

export const SettingsNavigationRow = ({ label, subtext, Icon, onPress }) => {
  return (
    <SettingsItem
      LeftIcon={Icon}
      label={label}
      subtext={subtext}
      RightComponent={<AppIcon.Chevron color={COLOUR.GREY_ONE} direction="right" />}
      onPress={onPress}
    />
  );
};

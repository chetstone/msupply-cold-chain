import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { t } from '~translations';
import { SettingsList } from '~layouts';
import { useRouteProps } from '~hooks';

import { SettingsTextInputRow, SettingsGroup, SettingsNumberInputRow } from '~components/settings';
import { BreachConfigurationAction, BreachConfigurationSelector } from '~features/Entities';
import { SETTINGS_STACK } from '~constants';
import { SettingsStackParameters } from '../../containers/SettingsStackNavigator';

export const CumulativeDetailSettingScreen: FC = () => {
  const { id } = useRouteProps<SettingsStackParameters, SETTINGS_STACK.SENSOR_DETAIL>();
  const { [id]: config } = useSelector(BreachConfigurationSelector.byId);

  const dispatch = useDispatch();

  const { duration, description, minimumTemperature, maximumTemperature } = config;

  const isHotCumulative = id === 'HOT_CUMULATIVE';
  const temperature = id === 'HOT_CUMULATIVE' ? minimumTemperature : maximumTemperature;

  return (
    <SettingsList>
      <SettingsGroup title={t('EDIT_CUMULATIVE_TEMPERATURE_CONFIGURATION_DETAILS')}>
        <SettingsTextInputRow
          label={t('TEMPERATURE_CUMULATIVE_DESCRIPTION')}
          subtext={t('TEMPERATURE_CUMULATIVE_DESCRIPTION_SUBTEXT')}
          onConfirm={({ inputValue }: { inputValue: string }) =>
            dispatch(BreachConfigurationAction.update(id, 'description', inputValue))
          }
          value={description}
          editDescription={t('TEMPERATURE_CUMULATIVE_DESCRIPTION_EDIT')}
          validation={Yup.string()
            .required(t('REQUIRED'))
            .max(20, t('MAX_CHARACTERS', { number: 20 }))}
        />
        <SettingsNumberInputRow
          label={t('DURATION')}
          subtext={t('DURATION_SUBTEXT')}
          initialValue={duration / (1000 * 60)}
          maximumValue={10 * 60}
          minimumValue={1}
          step={1}
          metric={t('MINUTES')}
          onConfirm={({ value }: { value: number }) =>
            dispatch(BreachConfigurationAction.update(id, 'duration', value * 60 * 1000))
          }
          editDescription={t('EDIT_TEMPERATURE_BREACH_DURATION')}
        />
        <SettingsNumberInputRow
          label={t('TEMPERATURE')}
          subtext={isHotCumulative ? t('HOT_CUMULATIVE_SUBTEXT') : t('COLD_CUMULATIVE_SUBTEXT')}
          initialValue={temperature}
          maximumValue={100}
          minimumValue={-30}
          step={1}
          metric={`°${t('CELSIUS')}`}
          onConfirm={({ value }: { value: number }) =>
            dispatch(
              BreachConfigurationAction.update(
                id,
                isHotCumulative ? 'minimumTemperature' : 'maximumTemperature',
                value
              )
            )
          }
          editDescription={
            isHotCumulative ? t('HOT_CUMULATIVE_SUBTEXT') : t('COLD_CUMULATIVE_SUBTEXT')
          }
        />
      </SettingsGroup>
    </SettingsList>
  );
};

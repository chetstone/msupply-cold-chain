import React, { FC, ReactNode } from 'react';
import { View } from 'react-native';
import { LoadAfterInteractions } from '../components';
import { Centered } from './Centered';
import { Gradient } from './Gradient';
import { Row } from './Row';

interface SensorDetailScreenLayoutProps {
  ActionBar: ReactNode;
  Name: ReactNode;
  CumulativeBreach: ReactNode;
  Chart: ReactNode;
  Table: ReactNode;
}

export const SensorDetailScreenLayout: FC<SensorDetailScreenLayoutProps> = ({
  ActionBar,
  Name,
  CumulativeBreach,
  Chart,
  Table,
}) => {
  return (
    <Gradient>
      <LoadAfterInteractions withDelay={false}>
        <Row alignItems="center" justifyContent="space-between">
          <View>{Name}</View>
          <View>{CumulativeBreach}</View>
        </Row>
        <Centered>{Chart}</Centered>
        <View>{ActionBar}</View>
        <View>{Table}</View>
      </LoadAfterInteractions>
    </Gradient>
  );
};
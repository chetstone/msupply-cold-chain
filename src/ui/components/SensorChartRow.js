import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import moment from 'moment';
import { SensorRowLayout, Row, Column } from '~layouts';
import { Divider, Chart } from '~presentation';
import { STYLE, COLOUR } from '~constants';
import { NormalText, BoldText, MediumText } from '~presentation/typography';
import { SensorAction } from '~features/sensor';
import { SensorStatus } from './SensorStatus';

export const SensorChartRow = React.memo(({ id, direction = 'right', onPress, onLongPress }) => {
  const isLoading = useSelector(state => state.chart.listLoading[id]);
  const logs = useSelector(state => state.chart.listDataPoints[id], shallowEqual);
  const { coldCumulative, hotCumulative } =
    useSelector(state => state.breach.listCumulative[id], shallowEqual) ?? {};

  const sensor = useSelector(state => state.sensor.status[id], shallowEqual) ?? {};
  const dispatch = useDispatch();

  const { numberOfLogs, batteryLevel } = sensor;

  useEffect(() => {
    dispatch(SensorAction.getSensorState(id));
  }, []);

  return (
    <TouchableNativeFeedback onPress={numberOfLogs ? onPress : null} onLongPress={onLongPress}>
      <SensorRowLayout
        Chart={
          isLoading ? (
            <Row
              alignItems="center"
              justifyContent="center"
              style={{ width: STYLE.WIDTH.NORMAL_CHART }}
            >
              <ActivityIndicator size="large" color={COLOUR.PRIMARY} />
            </Row>
          ) : (
            (logs?.length && <Chart data={logs} />) || (
              <Row
                alignItems="center"
                justifyContent="center"
                style={{ width: STYLE.WIDTH.NORMAL_CHART }}
              >
                <MediumText>No data</MediumText>
              </Row>
            )
          )
        }
        SensorName={null}
        direction={direction}
        SensorStatus={
          // eslint-disable-next-line react/jsx-wrap-multilines
          numberOfLogs ? (
            <SensorStatus
              batteryLevel={batteryLevel}
              temperature={String(sensor.currentTemperature)}
              isInHotBreach={!!sensor.isInHotBreach}
              isInColdBreach={!!sensor.isInColdBreach}
            />
          ) : null
        }
        Extra={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <Column>
            <BoldText colour={COLOUR.WHITE}>{sensor.name ?? sensor.macAddress}</BoldText>
            {numberOfLogs ? (
              <>
                <NormalText>
                  {`${moment
                    .duration(moment.unix(moment().unix() - sensor.mostRecentLogTimestamp))
                    .humanize()} ago`}
                </NormalText>
                {coldCumulative && (
                  <NormalText>
                    {`${moment.duration(coldCumulative.duration, 'seconds').humanize()} between ${
                      coldCumulative.minimumTemperature
                    }${String.fromCharCode(176)}C - ${
                      coldCumulative.maximumTemperature
                    }${String.fromCharCode(176)}C`}
                  </NormalText>
                )}
                {hotCumulative && (
                  <NormalText>
                    {`${moment.duration(hotCumulative.duration, 'seconds').humanize()} between ${
                      hotCumulative.minimumTemperature
                    }${String.fromCharCode(176)}C - ${
                      hotCumulative.maximumTemperature
                    }${String.fromCharCode(176)}C`}
                  </NormalText>
                )}
              </>
            ) : null}
          </Column>
        }
      />
      <Divider width={STYLE.WIDTH.DIVIDER_NEARLY_FULL} backgroundColor={COLOUR.DIVIDER} />
    </TouchableNativeFeedback>
  );
});

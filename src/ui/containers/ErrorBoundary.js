import React from 'react';
import { View } from 'react-native';
import Bugsnag from '@bugsnag/react-native';
import RNRestart from 'react-native-restart';
import { COLOUR } from '~constants';
import { LargeText } from '../presentation/typography';
import { Centered } from '../layouts';
import { Button } from '../components/buttons';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    Bugsnag.start();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    Bugsnag.notify(error);
    this.setState({ hasError: true });
  }

  render() {
    const { children } = this.props;

    const { hasError } = this.state;

    if (!hasError) return children;

    return (
      <Centered style={{ width: '100%', height: '100%', backgroundColor: COLOUR.DANGER }}>
        <LargeText>Sorry! somethings gone wrong.</LargeText>
        <LargeText>Click below to restart.</LargeText>
        <View style={{ height: 50 }} />
        <Button text="RESTART" onPress={() => RNRestart.Restart()} />
      </Centered>
    );
  }
}
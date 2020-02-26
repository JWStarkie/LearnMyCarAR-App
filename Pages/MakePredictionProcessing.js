import React, { Component } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import AzureConnection from 'util/AzureConnection';

export default function MakePredictionProcessing({ route, navigation }) {
  const { dataPass } = route.params;
  AzureConnection.handleAzure(dataPass, navigation);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            color: '#3A88E9',
            paddingBottom: 50,
          }}>
          We are processing your image to make a prediction. {'\n'}
          {'\n'}Please wait whilst we do all of the hard work behind the scenes!
        </Text>
      </View>
      <Timer />
    </View>
  );
}

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerReached: false,
    };
  }

  componentDidMount() {
    if (this.timerHandle) {
      console.warn('the Timer is still running!');
      return;
    }
    this.timerHandle = setTimeout(() => {
      this.setState({ timerReached: true });
      this.timerHandle = 0;
    }, 3000);
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    if (!this.state.timerReached) {
      return (
        <View style={{ flex: 1, marginBottom: 100 }}>
          <ActivityIndicator size="large" color="#0000ff" animating={true} />
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1, marginBottom: 100 }}>
          <ActivityIndicator size="large" color="#0000ff" animating={true} />
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                color: '#3A88E9',
                paddingBottom: 50,
              }}>
              Just a few more seconds and we'll be ready!
            </Text>
          </View>
        </View>
      );
    }
  }
}

// class Blink extends Component {}

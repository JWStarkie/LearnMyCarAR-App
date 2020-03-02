import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, View, Text } from 'react-native';
import AzureConnection from 'util/AzureConnection';

export default function UploadingProcessing({ route, navigation }) {
  const { mode } = route.params;
  if (mode === 'Make') {
    const { dataPass } = route.params;
    AzureConnection.handleAzure(dataPass, navigation);
  } else if (mode === 'Model') {
    const { dataPass } = route.params;
    const { vehicleMake } = route.params;
    AzureConnection.handleAzureModels(dataPass, vehicleMake, navigation);
  }

  return (
    <View style={styles.mainViewStyle}>
      <View style={styles.topView}>
        <Text style={styles.textStyle}>
          We are processing your image to make a prediction. {'\n'}
          {'\n'}Please wait whilst we do all of the hard work behind the scenes!
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <ActivityIndicator size="large" color="#0000ff" animating={true} />
      </View>
      <View style={styles.timerView}>
        <Timer />
      </View>
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
    if (this.state.timerReached) {
      return (
        <Text style={styles.textStyle}>
          Just a few more seconds and we'll be ready!
        </Text>
      );
    } else {
      return <View />;
    }
  }
}

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    color: '#3A88E9',
    paddingBottom: 50,
  },
  topView: {
    flex: 1,
    justifyContent: 'center',
  },
  mainViewStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  timerView: {
    flex: 1,
  },
});

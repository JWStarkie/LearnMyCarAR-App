'use strict';

import React, { Component } from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  PermissionsAndroid,
  Image,
} from 'react-native';
import { RNCamera } from 'react-native-camera';

import CameraFunctions from './CameraFunctions';

export default class CameraAccess extends Component {
  state = {
    hasPermission: 'granted' === PermissionsAndroid.RESULTS.GRANTED,
    type: RNCamera.Constants.Type.back,
    processing: null,
  };

  async componentDidMount() {
    try {
      if (!this.state.hasPermission) {
        this.requestPermissions();
      }
    } catch (err) {
      console.warn(err);
    }
  }

  async requestPermissions() {
    try {
      const status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Permission to use your camera',
          message: 'LearnMyCar needs permission to use your camera.',
          buttonPositive: 'Ok',
        },
      );
      console.log('Permission status = ' + status);
      if (status === 'granted') {
        this.setState({ hasPermission: status === 'granted' }); // to set as 'true'
        console.log('For fucks sake!');
      } else {
        this.setState({ hasPermission: status === 'granted' }); // to set as 'false'
      }
    } catch (err) {
      console.warn(err);
    }
  }

  render() {
    const { hasPermission } = this.state;
    console.log(hasPermission);
    if (hasPermission === null) {
      return (
        <View>
          <ActivityIndicator size="large" color="#0000ff" animating={true} />
        </View>
      );
    } else if (hasPermission === false) {
      return (
        <View style={styles.viewOne}>
          <Text style={styles.textOne}>
            No authorisation to access to camera, please give this application
            permission to continue!! You must now do this through your settings
            or restart the application!!
          </Text>
          <TouchableOpacity
            style={{ padding: 10, backgroundColor: '#3A88E9' }}
            onPress={() => this.requestPermissions()}>
            <Text> Update Camera Settings </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.cameraView}
            type={this.type}
            captureAudio={false}>
            <View style={styles.overlayStyle}>
              <View style={styles.overlayHeaderFooter}>
                {!this.props.makePredicted ? (
                  <Text style={styles.instructionText}>
                    Please position the logo on your steering wheel inside the
                    square and press the camera icon below:
                  </Text>
                ) : (
                  <Text style={styles.instructionText}>
                    Please position your middle console inside the square and
                    press the camera icon below:
                  </Text>
                )}
              </View>
              <View style={styles.overlayMiddle}>
                <View style={styles.overlayMiddleSides} />
                <View style={styles.overlayTransparent} />
                <View style={styles.overlayMiddleSides} />
              </View>
              <View style={styles.overlayHeaderFooter} />
            </View>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => this._handleclick()}
              disabled={this.state.processing}>
              {this.state.processing ? (
                <ActivityIndicator
                  size="large"
                  color="#0000ff"
                  animating={this.state.processing}
                />
              ) : null}
              <Image
                source={require('assets/camera-icon-white.png')}
                style={styles.iconSize}
              />
            </TouchableOpacity>
          </RNCamera>
        </View>
      );
    }
  }

  _handleclick() {
    console.log('makePredicted = ' + this.props.makePredicted);
    if (!this.props.makePredicted) {
      this.setState({ processing: true });
      CameraFunctions.takePictureMake(this.props.navig, this.camera);
      console.log('takePictureMake');
    } else {
      this.setState({ processing: true });
      CameraFunctions.takePictureModel(
        this.props.navig,
        this.props.vehicleMake,
        this.camera,
      );
      console.log('takePictureModel');
    }
  }
}

const styles = StyleSheet.create({
  viewOne: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textOne: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  instructionText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    alignSelf: 'center',
  },
  overlayStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  overlayTransparent: {
    width: 300,
    borderColor: 'white',
    backgroundColor: 'transparent',
    borderWidth: 3,
  },
  overlayMiddle: {
    flex: 2,
    flexDirection: 'row',
  },
  overlayMiddleSides: {
    width: '50%',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  overlayHeaderFooter: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
  },
  cameraView: {
    flex: 1,
  },
  touchable: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginBottom: 20,
  },
  iconSize: {
    height: 50,
    width: 50,
    padding: 10,
  },
});

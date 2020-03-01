import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  View,
  Text,
} from 'react-native';

class Confirmation extends Component {
  state = {
    isModalVisible: false,
    currentChoice: false,
  };

  setisModalVisible(visible) {
    this.setState({ isModalVisible: visible });
  }
  setCurrentState(predictionString) {
    console.log(predictionString);
    console.log(this.state.currentChoice);
    if (predictionString === 'Ford' || predictionString === 'Volkswagen') {
      null;
    } else {
      this.setState({ currentChoice: true === true });
      console.log('this is happening');
    }
  }

  render() {
    const predictionString = this.props.prediction;
    const imageUrl = this.props.imageUrl;
    const navigation = this.props.navig;
    console.log('ImageUrl = ' + imageUrl);
    console.log(imageUrl);
    return (
      <View style={styles.mainView}>
        {/* MODAL START */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.isModalVisible}
          onRequestClose={() => {
            this.setisModalVisible(!this.state.isModalVisible);
          }}>
          <View style={styles.modalOuterView}>
            <View style={styles.modalOuterView2} />
            <View style={styles.modalMainView}>
              <View style={styles.modalTopSectionView}>
                <Text style={styles.textStyle}>
                  Would you like to help improve the app by sharing the image
                  you have taken?
                </Text>
              </View>
              <View style={styles.modalBottomSectionView}>
                <View style={styles.modalButtonViewStyles}>
                  <TouchableOpacity
                    style={styles.noButtonStyle}
                    activeOpacity={0.5}
                    onPress={() => {
                      navigation.navigate('SorryPage', { didUpload: false });
                    }}>
                    <Image
                      source={require('assets/no-icon-black.png')}
                      style={styles.imageStyles}
                    />
                    <View style={{ width: 10 }} />
                    <Text style={styles.buttonTextStyle}>No</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ width: 20 }} />
                <View style={styles.modalButtonViewStyles}>
                  <TouchableOpacity
                    style={styles.yesButtonStyle}
                    activeOpacity={0.5}
                    onPress={() => {
                      this.setisModalVisible(!this.state.isModalVisible);
                      console.log(this.state.currentChoice);
                      navigation.navigate('UploadUserChoice', {
                        currentChoice: this.state.currentChoice,
                        vehicleMake: predictionString,
                        imageUrl: imageUrl,
                      });
                    }}>
                    <Image
                      source={require('assets/yes-icon-white.png')}
                      style={styles.imageStyles}
                    />
                    <View style={{ width: 10 }} />
                    <Text style={styles.buttonTextStyleYes}>Yes</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        {/* MODAL END */}
        <View style={styles.topSectionView}>
          <Image style={styles.imagePreview} source={{ uri: imageUrl }} />
          <Text style={styles.textStyle}>
            Is your vehicle a {predictionString}?
          </Text>
        </View>
        <View style={styles.bottomSectionView}>
          <View style={styles.buttonViewStyles}>
            <TouchableOpacity
              style={styles.noButtonStyle}
              activeOpacity={0.5}
              onPress={() => {
                this.setisModalVisible(!this.state.isModalVisible);
                this.setCurrentState(predictionString);
              }}>
              <Image
                source={require('assets/no-icon-black.png')}
                style={styles.imageStyles}
              />
              <View style={{ width: 10 }} />
              <Text style={styles.buttonTextStyle}>No</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: 20 }} />
          <View style={styles.buttonViewStyles}>
            <TouchableOpacity
              style={styles.yesButtonStyle}
              activeOpacity={0.5}
              onPress={() => {
                let destinationPage =
                  predictionString === 'Ford' ||
                  predictionString === 'Volkswagen'
                    ? 'ModelPrediction'
                    : 'AR';
                navigation.navigate(destinationPage, {
                  predictionMake: predictionString,
                });
              }}>
              <Image
                source={require('assets/yes-icon-white.png')}
                style={styles.imageStyles}
              />
              <View style={{ width: 10 }} />
              <Text style={styles.buttonTextStyleYes}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Confirmation;

const styles = StyleSheet.create({
  modalMainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#eeeeee',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  modalOuterView: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
  },
  modalOuterView2: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'transparent',
  },
  selectionButtons: {
    height: 10,
    backgroundColor: '#353535',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 50,
  },
  topSectionView: {
    flex: 2,
    paddingTop: 50,
    justifyContent: 'space-between',
  },
  imagePreview: { width: '100%', height: 250 },
  textStyle: {
    textAlign: 'center',
    fontSize: 30,
    color: '#3A88E9',
    paddingBottom: 15,
  },
  imageStyles: { width: 45, height: 45, marginLeft: 5 },
  bottomSectionView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  modalTopSectionView: {
    flex: 2,
    justifyContent: 'center',
    alignContent: 'center',
  },
  modalBottomSectionView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 45,
  },
  buttonViewStyles: {
    flex: 1,
    flexDirection: 'row',
  },
  modalButtonViewStyles: {
    flex: 1,
    flexDirection: 'row',
  },
  noButtonStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    height: 50,
    backgroundColor: '#dfdfdf',
    borderRadius: 12.5,
  },
  buttonTextStyle: {
    flex: 1,
    alignContent: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  buttonTextStyleYes: {
    flex: 1,
    alignContent: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15,
  },
  yesButtonStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    height: 50,
    backgroundColor: '#3A88E9',
    borderRadius: 12.5,
  },
});

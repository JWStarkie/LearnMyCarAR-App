import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
  View,
  Text,
} from 'react-native';

class Confirmation extends Component {
  render() {
    const predictedMake = this.props.prediction;
    const imageUrl = this.props.imageUrl;
    console.log('ImageUrl = ' + imageUrl);
    console.log(imageUrl);
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'stretch',
          justifyContent: 'center',
          margin: 50,
        }}>
        <View
          style={{
            flex: 2,
            paddingTop: 50,
            justifyContent: 'space-between',
          }}>
          <Image
            style={{ width: '100%', height: 250 }}
            source={{ uri: imageUrl }}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: '#3A88E9',
              paddingBottom: 15,
            }}>
            {/* Image URL: {JSON.stringify(navigation.state.params.imageUrl)} */}
            Is this your vehicle make? ({predictedMake})
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
                height: 50,
                backgroundColor: '#dfdfdf',
                borderRadius: 12.5,
              }}
              activeOpacity={0.5}>
              <Image
                source={require('assets/no-icon.png')}
                style={{ width: 50, height: 50 }}
              />
              <View style={{ width: 10 }} />
              <Text
                style={{
                  flex: 1,
                  alignContent: 'center',
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                No
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: 20 }} />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
                height: 50,
                backgroundColor: '#3A88E9',
                borderRadius: 12.5,
              }}
              activeOpacity={0.5}>
              <Image
                source={require('assets/yes-icon.png')}
                style={{ width: 60, height: 60 }}
              />
              <View style={{ width: 10 }} />
              <Text
                style={{
                  flex: 1,
                  alignContent: 'center',
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                Yes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Confirmation;

const styles = StyleSheet.create({
  selectionButtons: {
    height: 10,
    backgroundColor: '#353535',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

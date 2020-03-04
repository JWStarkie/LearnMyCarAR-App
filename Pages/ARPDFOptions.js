import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, View, Text } from 'react-native';
import logo from 'assets/icon.png';

export default function ARPDFOptions({ route, navigation }) {
  const { predictionMake } = route.params;
  const { previousPrediction } = route.params;

  return (
    <View style={styles.viewOne}>
      <View style={styles.logoView}>
        <Image source={logo} style={{ height: 130, width: 130 }} />
      </View>
      <View style={styles.middleView}>
        <View style={styles.anotherView}>
          <Text style={styles.anotherView2}>Your vehicle is a</Text>
        </View>
        <View style={styles.someView}>
          <Text style={{ fontSize: 35, color: '#3A88E9' }}>
            {previousPrediction} {predictionMake}
          </Text>
        </View>
        <View style={styles.someOtherView}>
          <Text style={styles.textView}>
            Which format would you like to view your manual in ...
          </Text>
        </View>
      </View>
      <View style={styles.buttonViewOne}>
        <TouchableOpacity
          style={styles.buttonViewMain}
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('Home');
            console.log('this works');
          }}>
          <Image
            source={require('assets/ar-icon.png')}
            style={{ height: 50, width: 50, marginBottom: 25 }}
          />
          <Text style={styles.buttonTextView}>AR</Text>
        </TouchableOpacity>
        <View style={{ width: 50 }} />
        <TouchableOpacity
          style={styles.buttonViewMain}
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('PDFView', { model: predictionMake });
            console.log('this works');
          }}>
          <Image
            source={require('assets/pdf-icon.png')}
            style={{ height: 50, width: 50, marginBottom: 25 }}
          />
          <Text style={styles.buttonTextView}>PDF</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.bottomButtonView}
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('MakePrediction');
          console.log('this works');
        }}>
        <Text style={{ fontWeight: 'bold', color: '#fff' }}>
          SCAN A NEW VEHICLE
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewOne: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  logoView: {
    flex: 1,
    alignItems: 'center',
  },
  middleView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    marginTop: 25,
  },
  anotherView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  anotherView2: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3A88E9',
  },
  someView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  someOtherView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonViewOne: {
    flex: 1,
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginBottom: 25,
  },
  textView: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3A88E9',
  },
  buttonViewMain: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(58, 136, 233, 0.2)',
  },
  buttonTextView: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3A88E9',
  },
  bottomButtonView: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3A88E9',
    borderRadius: 10,
  },
});

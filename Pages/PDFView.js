import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import Pdf from 'react-native-pdf';

export default function PDFView({ route, navigation }) {
  const { model } = route.params;
  const sourcePdf = getSourcePdf();
  console.log(sourcePdf);

  function getSourcePdf() {
    if (model === 'Focus') {
      return {
        uri:
          'http://www.fordservicecontent.com/Ford_Content/catalog/owner_guides/ENUSA_CG3630_Focus_og_201501.pdf',
      };
    } else if (model === 'Fiesta') {
      return {
        uri:
          'http://www.fordservicecontent.com/Ford_Content/catalog/owner_guides/ENUSA_CG3582_FCN_og_201402.pdf',
      };
    }
  }

  return (
    <View style={styles.container}>
      <PDFScreen
        pdfSource={sourcePdf}
        navig={navigation}
        onLoadComplete={ToastAndroid.showWithGravity(
          'Your PDF is coming right up!',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        )}
      />
    </View>
  );
}

class PDFScreen extends Component {
  render() {
    const pdfUri = this.props.pdfSource;
    const navigation = this.props.navig;
    return (
      <View style={{ flex: 1 }}>
        <Pdf
          source={pdfUri}
          style={styles.pdfView}
          activityIndicatorProps={{
            color: '#009900',
            progressTintColor: '#009900',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            backgroundColor: 'transparent',
            justifyContent: 'center',
            paddingTop: 8,
          }}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
              }}>
              BACK
            </Text>
          </TouchableOpacity>
          <View style={{ flex: 1, paddingLeft: 8 }}>
            <Text
              style={{
                textAlign: 'center',
              }}>
              Please scroll the page to view the manual
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pdfView: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  backButton: {
    flex: 1,
    height: '100%',
    alignSelf: 'flex-start',
    width: '50%',
    borderRadius: 25,
    backgroundColor: '#3A88E9',
    justifyContent: 'center',
  },
});

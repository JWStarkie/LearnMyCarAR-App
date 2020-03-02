import * as React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import logo from 'assets/icon-white.png';
import face from 'assets/face-icon.png';
import star from 'assets/star-icon.png';

export default function SorryPage({ route, navigation }) {
  const { didUpload } = route.params;
  // false from confirmation, true from user upload choice
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3A88E9',
      }}>
      <Image source={logo} style={{ height: 150, width: 150 }} />
      <Text style={styles.textStyles}>
        {didUpload
          ? 'Thank you very much for helping us improve our app'
          : 'We respect your right not to help improve our app'}
      </Text>
      <Image source={face} style={{ height: 80, width: 80 }} />
      <Text style={styles.textStyles}>
        We're sorry we could not find your vehicle this time around.
      </Text>
      <Image source={star} style={{ height: 80, width: 80 }} />
      <Text style={styles.textStyles}>
        Watch this space, we will be updating the app very soon with the help of
        our users!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyles: { color: '#fff', fontSize: 20, margin: 10, textAlign: 'center' },
});

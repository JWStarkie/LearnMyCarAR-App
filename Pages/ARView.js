import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ARView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>This is the AR View Page.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

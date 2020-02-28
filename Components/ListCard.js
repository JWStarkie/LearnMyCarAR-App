import * as React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default function CardList(props) {
  return (
    <View style={styles.cardLayout}>
      <View style={styles.cardTextContent}>
        <Text style={styles.textStyle}>{props.children}</Text>
      </View>
      <View style={styles.cardImageContent}>
        <Image
          style={{ height: 24, width: 24 }}
          source={require('assets/chevron-black.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardLayout: {
    flex: 1,
    height: 100,
    flexDirection: 'row',
    borderRadius: 15,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    backgroundColor: '#fff',
  },
  cardTextContent: {
    flex: 2,
    marginHorizontal: 18,
    marginVertical: 20,
  },
  cardImageContent: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 15,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    color: '#3A88E9',
  },
});

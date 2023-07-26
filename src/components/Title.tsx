import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>
        A joke a day keeps the doctor away
      </Text>
      <Text style={[styles.text, styles.subtitle]}>
        If you joke the wrong way, your teeth have to pay. (Serious)
      </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 180,
    padding: 16,
    backgroundColor: '#29B363',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 24,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 12,
  },
});

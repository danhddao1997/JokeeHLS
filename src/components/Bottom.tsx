import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COPYRIGHT_TEXT, WARNING_TEXT} from '../utils/constants';

const Bottom = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.warningText}>{WARNING_TEXT}</Text>
      <Text style={styles.copyrightText}>{COPYRIGHT_TEXT}</Text>
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: '#ebebeb',
    padding: 16,
  },
  warningText: {
    color: '#969696',
    textAlign: 'center',
    marginBottom: 12,
    fontSize: 12,
  },
  copyrightText: {
    color: '#646464',
    textAlign: 'center',
    fontSize: 16,
  },
});

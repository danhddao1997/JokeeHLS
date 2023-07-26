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
    paddingTop: 4,
  },
  warningText: {
    color: '#969696',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 11,
  },
  copyrightText: {
    color: '#646464',
    textAlign: 'center',
    fontSize: 14,
  },
});

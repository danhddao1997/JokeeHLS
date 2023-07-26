import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {assets} from '../assets';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={assets.logo} />
      <View style={styles.rightContainer}>
        <View style={styles.rightTextContainer}>
          <Text style={[styles.rightText, styles.topText]}>
            Handicrafted by
          </Text>
          <Text style={[styles.rightText, styles.bottomText]}>Jim HLS</Text>
        </View>
        <Image style={styles.avatar} source={assets.avatar} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  logo: {
    width: 40,
    aspectRatio: 1,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightTextContainer: {
    marginRight: 8,
  },
  rightText: {
    textAlign: 'right',
  },
  topText: {
    color: '#757575',
  },
  bottomText: {
    marginTop: 2,
    fontSize: 16,
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
});

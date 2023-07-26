import {StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import {JOKES, NO_JOKE_TEXT} from '../utils/constants';
import VoteButton from './VoteButton';
import {VoteStatus} from '../utils/enums';
import {useJokeContext} from '../utils/context/joke';

const Content = () => {
  const {jokeIndex} = useJokeContext();

  const render = useMemo(() => {
    if (jokeIndex === -1) {
      return null;
    } else if (jokeIndex === JOKES.length) {
      return (
        <View style={styles.noJokeContainer}>
          <Text style={[styles.joke, styles.noJokeText]}>{NO_JOKE_TEXT}</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.joke}>{JOKES[jokeIndex]}</Text>
        <View style={styles.voteRow}>
          <VoteButton status={VoteStatus.like} />
          <VoteButton status={VoteStatus.dislike} />
        </View>
      </View>
    );
  }, [jokeIndex]);

  return render;
};

export default Content;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: '4%',
    justifyContent: 'space-between',
  },
  joke: {
    color: '#757575',
    fontSize: 15,
  },
  voteRow: {
    flexDirection: 'row',
    marginHorizontal: 40,
    flexWrap: 'wrap',
  },
  noJokeContainer: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noJokeText: {
    textAlign: 'center',
  },
});

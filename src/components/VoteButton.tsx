import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useCallback, useMemo} from 'react';
import {VoteStatus} from '../utils/enums';
import {VOTE_TITLE} from '../utils/constants';
import {useJokeContext} from '../utils/context/joke';

const {width: sWidth} = Dimensions.get('screen');

interface Props {
  status: VoteStatus;
}

const VoteButton: FC<Props> = ({status}) => {
  const {onStoreJokeVote, jokeIndex, storing} = useJokeContext();

  const backgroundColor = useMemo(
    () => (status === VoteStatus.like ? '#2C7EDB' : '#29B363'),
    [status],
  );

  const onPress = useCallback(() => {
    onStoreJokeVote(status, jokeIndex);
  }, [jokeIndex, onStoreJokeVote, status]);

  const render = useMemo(
    () => (
      <View style={styles.container}>
        <TouchableOpacity
          disabled={storing}
          onPress={onPress}
          activeOpacity={0.8}
          style={[styles.button, {backgroundColor}]}>
          <Text style={styles.title}>{VOTE_TITLE[status]}</Text>
        </TouchableOpacity>
      </View>
    ),
    [backgroundColor, onPress, status, storing],
  );

  return render;
};

export default VoteButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    minWidth: sWidth / 3,
    minHeight: 40,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
  },
});

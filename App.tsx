import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Bottom, Content, Header, Title} from './src/components';
import JokeContext, {JokeContextProps} from './src/utils/context/joke';
import {getVotesCount, storeVote} from './src/utils/managers/async-storage';
import {VoteStatus} from './src/utils/enums';

const App = () => {
  const [jokeIndex, setJokeIndex] = useState(-1);
  const [storing, setStoring] = useState(false);

  const checkLatestJoke = useCallback(async () => {
    const votesCount = await getVotesCount();
    setJokeIndex(votesCount);
  }, []);

  // we only need this for first render
  useEffect(() => {
    checkLatestJoke();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onStoreJokeVote = useCallback(
    async (status: VoteStatus, index: number) => {
      setStoring(true);
      await storeVote(status, index);
      setJokeIndex(prev => prev + 1);
      setStoring(false);
    },
    [],
  );

  const contextValue: JokeContextProps = useMemo(() => {
    return {
      jokeIndex,
      onStoreJokeVote,
      storing,
    };
  }, [jokeIndex, onStoreJokeVote, storing]);

  return (
    <JokeContext.Provider value={contextValue}>
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <Header />
          <Title />
          <Content />
          <Bottom />
        </SafeAreaView>
      </View>
    </JokeContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  safeArea: {
    flex: 1,
  },
});

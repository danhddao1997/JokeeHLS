import AsyncStorage from '@react-native-async-storage/async-storage';
import {VoteStatus} from '../enums';
import {VOTE_STORAGE_KEY} from '../constants';

const getVotes = async () => {
  const voteStorage = await AsyncStorage.getItem(VOTE_STORAGE_KEY);
  return voteStorage;
};

export const getVotesCount = async () => {
  const voteStorage = await getVotes();
  if (!voteStorage) {
    return 0;
  }
  const voteStorageParse = JSON.parse(voteStorage);
  return Object.keys(voteStorageParse).length;
};

export const storeVote = async (vote: VoteStatus, index: number) => {
  const voteStorage = await getVotes();
  const currentStorage = voteStorage ? JSON.parse(voteStorage) : {};
  currentStorage[index] = vote;
  await AsyncStorage.setItem(VOTE_STORAGE_KEY, JSON.stringify(currentStorage));
};

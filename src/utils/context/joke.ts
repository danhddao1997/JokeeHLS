import {createContext, useContext} from 'react';
import {VoteStatus} from '../enums';

export interface JokeContextProps {
  jokeIndex: number;
  storing: boolean;
  onStoreJokeVote: (value: VoteStatus, index: number) => void;
}

const JokeContext = createContext<JokeContextProps | null>(null);

export const useJokeContext = () => useContext(JokeContext)!;

export default JokeContext;

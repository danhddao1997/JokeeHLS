/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import {
  NO_JOKE_TEXT,
  VOTE_STORAGE_KEY,
  VOTE_TITLE,
} from '../src/utils/constants';
import {VoteStatus} from '../src/utils/enums';
import AsyncStorage from '@react-native-async-storage/async-storage';

let root: ReturnType<typeof render>;

beforeEach(async () => {
  await waitFor(() => {
    root = render(<App />);
  });
});

test('renders correctly', () => {});

test('upvote and downvote button is available', async () => {
  const like = root.getByText(VOTE_TITLE[VoteStatus.like]);
  const dislike = root.getByText(VOTE_TITLE[VoteStatus.dislike]);

  expect(like).toBeTruthy();
  expect(dislike).toBeTruthy();
});

test('like vote', async () => {
  await waitFor(() => {
    fireEvent.press(screen.getByText(VOTE_TITLE[VoteStatus.like]));
  });

  await waitFor(() => {
    expect(AsyncStorage.getItem).toBeCalledWith(VOTE_STORAGE_KEY);
  });

  await waitFor(() => {
    expect(AsyncStorage.setItem).toBeCalledWith(
      VOTE_STORAGE_KEY,
      JSON.stringify({0: 0}),
    );
  });
});

test('dislike next vote', async () => {
  await waitFor(() => {
    fireEvent.press(screen.getByText(VOTE_TITLE[VoteStatus.dislike]));
  });

  await waitFor(() => {
    expect(AsyncStorage.getItem).toBeCalledWith(VOTE_STORAGE_KEY);
  });

  await waitFor(() => {
    expect(AsyncStorage.setItem).toBeCalledWith(
      VOTE_STORAGE_KEY,
      JSON.stringify({0: 0, 1: 1}),
    );
  });
});

test('no joke left', async () => {
  await waitFor(() => {
    fireEvent.press(screen.getByText(VOTE_TITLE[VoteStatus.dislike]));
  });

  await waitFor(() => {
    fireEvent.press(screen.getByText(VOTE_TITLE[VoteStatus.like]));
  });

  const noJokeText = screen.findByText(NO_JOKE_TEXT);
  expect(noJokeText).toBeTruthy();
});

import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { KeyboardData } from '../../constants';

import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Keyboard from '../Keyboard/Keyboard';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessData, setGuessData] = React.useState([]);
  return (
    <>
      <GuessResults
        guessData={guessData}
        answer={answer}
      />
      <GuessInput
        answer={answer}
        guessData={guessData}
        setGuessData={setGuessData}
      ></GuessInput>
      <Keyboard
        guessData={guessData}
        answer={answer}
      ></Keyboard>
    </>
  );
}

export default Game;

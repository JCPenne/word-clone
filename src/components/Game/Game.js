import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Guess from '../Guess/Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessData, setGuessData] = React.useState([]);

  return (
    <>
      <Guess></Guess>
      {guessData.length > 0 && <GuessResults guessData={guessData} />}
      <GuessInput
        guessData={guessData}
        setGuessData={setGuessData}
      ></GuessInput>
    </>
  );
}

export default Game;

import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Guess from '../Guess/Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessData, setGuessData] = React.useState([]);

  const numOfGuessesArr = range(0, NUM_OF_GUESSES_ALLOWED);
  return (
    <>
      <div className='guess-results'>
        {numOfGuessesArr.map((num, index) => (
          <Guess
            key={index}
            guess={guessData[index] ? guessData[index] : ''}
          ></Guess>
        ))}
      </div>
      {guessData.length > 0 && <GuessResults guessData={guessData} />}
      <GuessInput
        guessData={guessData}
        setGuessData={setGuessData}
      ></GuessInput>
    </>
  );
}

export default Game;

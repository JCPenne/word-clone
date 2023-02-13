import React from 'react';

import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import Guess from '../Guess/Guess';

function GuessResults({ guessData }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map(index => {
        return (
          <Guess
            guess={guessData[index]}
            key={index}
          ></Guess>
        );
      })}
    </div>
  );
}

export default GuessResults;

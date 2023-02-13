import React from 'react';

import { range } from '../../utils';

function Guess({ guess }) {
  const guessCells = range(0, 5);

  const guessArray = guess && guess.split('');
  console.log(guessArray);
  return (
    <p className='guess'>
      {guessCells.map((num, index) => (
        <span
          className='cell'
          key={index}
        >
          {guessArray.length > 0 ? guessArray[index] : ''}
        </span>
      ))}
    </p>
  );
}

export default Guess;

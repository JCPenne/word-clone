import React from 'react';

import { range } from '../../utils';

function Guess({ guess }) {
  const guessArr = guess ? guess.split('') : '';

  return (
    <>
      <p className='guess'>
        {range(5).map(num => (
          <span
            className='cell'
            key={num}
          >
            {guessArr[num]}
          </span>
        ))}
      </p>
    </>
  );
}

export default Guess;

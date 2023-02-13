import React from 'react';

import { range } from '../../utils';

function Guess() {
  const guessRows = range(0, 6);
  const guessCells = range(0, 5);
  return (
    <div class='guess-results'>
      {guessRows.map(row => (
        <p class='guess'>
          {guessCells.map(cell => (
            <span class='cell'></span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Guess;

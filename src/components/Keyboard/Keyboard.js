import React from 'react';

import { KeyboardData } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Letter({ children, status }) {
  return (
    <span className={status ? `letter ${status}` : 'letter'}>
      <strong>{children}</strong>
    </span>
  );
}

//Map over the guessData array, run each mapped element through the checkGuess function
//This will return a new array of {letter: '', status: ''}
//Map over the new array
// For each mapped element set the matching ValidatedKeyboard element to the updated status

function handleKeyboardValidation(Array, answer) {
  const validatedKeyboard = KeyboardData;
  Array.map(arr => {
    const resultArr = checkGuess(arr, answer);
    return resultArr.map(e =>
      validatedKeyboard.map(row => {
        if (row[e.letter]) {
          row[e.letter].status = e.status;
        }
      })
    );
  });
  return validatedKeyboard;
}

function Keyboard({ guessData, answer }) {
  const validatedKeyboard = handleKeyboardValidation(
    guessData,
    answer
  );

  return (
    <div className='keyboard'>
      {validatedKeyboard.map(row => (
        <p className='guess'>
          {Object.keys(row).map(cell => (
            <Letter status={row[cell].status}>{cell}</Letter>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Keyboard;

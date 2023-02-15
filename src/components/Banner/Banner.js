import React from 'react';

function Banner({ numOfGuesses, answer, guess }) {
  if (numOfGuesses <= 6 && guess === answer) {
    return (
      <div className='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {' '}
            {numOfGuesses} {numOfGuesses === 1 ? 'guess' : 'guesses'}
          </strong>
          .
        </p>
      </div>
    );
  }
  if (numOfGuesses >= 6 && guess !== answer) {
    return (
      <div className='sad banner'>
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  } else {
    return undefined;
  }
}

export default Banner;

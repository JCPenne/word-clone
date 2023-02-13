import React from 'react';

function GuessResults({ guessData }) {
  return (
    <div className='guess-results'>
      {guessData.map((guess, index) => (
        <p
          className='guess'
          key={index}
        >
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;

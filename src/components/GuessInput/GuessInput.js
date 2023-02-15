import React from 'react';

import Banner from '../Banner/Banner';

function GuessInput({ answer, guessData, setGuessData }) {
  const [guess, setGuess] = React.useState('');
  const [currentGuess, setCurrentGuess] = React.useState('');
  const [gameEnd, setGameEnd] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setGuessData([...guessData, guess]);

    setCurrentGuess(guess);
    setGuess('');
  }

  function handleGameEnd() {
    if (guess === answer || guessData.length >= 6) {
      setGameEnd(true);
    }
  }

  return (
    <>
      {gameEnd ? (
        <Banner
          numOfGuesses={guessData.length}
          answer={answer}
          guess={currentGuess}
        />
      ) : null}
      <form
        className='guess-input-wrapper'
        onSubmit={event => {
          handleSubmit(event);
          handleGameEnd();
        }}
      >
        <label htmlFor='guess-input'>Take a Guess: </label>
        <input
          required
          id='guess-input'
          value={guess}
          onChange={e => setGuess(e.target.value.toUpperCase())}
          autoFocus
          type='text'
          pattern='[a-zA-Z]{5}'
          title='5 letter word'
          disabled={gameEnd}
        />
      </form>
    </>
  );
}

export default GuessInput;

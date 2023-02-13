import React from 'react';

function GuessInput({ guessData, setGuessData }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    setGuessData([...guessData, guess]);

    console.log({ guess });
    setGuess('');
  }

  return (
    <>
      <form
        className='guess-input-wrapper'
        onSubmit={event => handleSubmit(event)}
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
        />
      </form>
    </>
  );
}

export default GuessInput;

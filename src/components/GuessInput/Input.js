import React from 'react';

function Input({ guess, setGuess }) {
  function handleSubmit(event) {
    event.preventDefault();

    if (guess.length !== 5) {
      return;
    }
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
          minLength={5}
          maxLength={5}
        />
      </form>
    </>
  );
}

export default Input;

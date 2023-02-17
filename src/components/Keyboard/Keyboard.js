import React from 'react';

import { range } from '../../utils';
import { KeyboardArray } from '../../constants';
function Letter({ children }) {
  return (
    <span className='letter'>
      <strong>{children}</strong>
    </span>
  );
}

function Keyboard() {
  return (
    <div className='keyboard'>
      <p className='guess'>
        {range(10).map(index => (
          <Letter key={index}>
            {Object.values(KeyboardArray[0])[0][index].letter}
          </Letter>
        ))}
      </p>
      <p className='guess'>
        {range(9).map(index => (
          <Letter key={index}>
            {Object.values(KeyboardArray[1])[0][index].letter}
          </Letter>
        ))}
      </p>
      <p className='guess'>
        {range(7).map(index => (
          <Letter key={index}>
            {Object.values(KeyboardArray[2])[0][index].letter}
          </Letter>
        ))}
      </p>
    </div>
  );
}

export default Keyboard;

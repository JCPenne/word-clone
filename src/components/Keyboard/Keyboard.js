import React from 'react';

import { range } from '../../utils';

function Letter({ children, status }) {
  return (
    <span className={status ? `letter ${status}` : 'letter'}>
      <strong>{children}</strong>
    </span>
  );
}

function Keyboard({ keyboardState }) {
  return (
    <div className='keyboard'>
      <p className='guess'>
        {range(10).map(index => (
          <Letter
            key={index}
            status={keyboardState[index].status}
          >
            {keyboardState[index].letter}
          </Letter>
        ))}
      </p>
    </div>
  );
}

export default Keyboard;

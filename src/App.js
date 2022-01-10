import React, { useState, useEffect } from 'react'
import './App.scss';
import Drag from './components/dnd/Drag';
import Drop from './components/dnd/Drop';
import Main from './components/main';
import { Move, Link } from './utils/constants'
// import Keyboard from './components/keyboard/Keyboard';

const App = () => {
  const [audioCtx, setAudioCtx] = useState(null);

  useEffect(() => {
    setAudioCtx(new AudioContext())
  }, [])

  return (
    <div className="App">
      {audioCtx ? <Main ctx={audioCtx} /> : ''}
      <Drop>
        <div style={{ width: '100px', height: '100px', backgroundColor: 'black' }}>Drag me</div>
      </Drop>

    </div>
  );
}

export default App;

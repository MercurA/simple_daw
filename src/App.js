import React, { useState, useEffect } from 'react'
import './App.scss';
import Main from './components/main';
// import Keyboard from './components/keyboard/Keyboard';

const App = () => {
  const [audioCtx, setAudioCtx] = useState(null);

  useEffect(() => {
    setAudioCtx(new AudioContext())
  }, [])

  return (
    <div className="App">
      {audioCtx ? <Main ctx={audioCtx} /> : ''}
    </div>
  );
}

export default App;

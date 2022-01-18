import React, { useState, useEffect } from 'react'
import './App.scss';
import Draggable from './components/dnd/Draggable';
import DragTrigger from './components/dnd/DragTrigger';
import Drop from './components/dnd/Drop';
import Drop_1 from './components/dnd/Drop';
import Main from './components/main';
import AudioRack from './components/racks/AudioRack';
import FileRack from './components/racks/FileRack';
import PluginRack from './components/racks/PluginRack';
import TimelineWrapper from './components/timeline';
// import Keyboard from './components/keyboard/Keyboard';

const App = () => {
  const [audioCtx, setAudioCtx] = useState(null);
  const [fileDropped, setFileDropped] = useState(false);

  useEffect(() => {
    setAudioCtx(new AudioContext())
  }, [])


  return (
    <div className="App">
      {/* <div className='appContainer'>
        {audioCtx ? <Main ctx={audioCtx} /> : ''}
      </div> */}
      {/* <AudioRack />
      <FileRack>
        <ul>
          <Draggable id={'audio'}>
            <li id='drums'>Drums</li>
          </Draggable>
          <ul>
            <Draggable id={'audio'}>
              <li id='hi_hat'> TEXT1</li>
            </Draggable>
          </ul>
        </ul>
      </FileRack>
      <PluginRack>
        <div>TEST</div>
      </PluginRack> */}
      <TimelineWrapper />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import AudioAnalyser from './analyser';
import PropTypes from 'prop-types';

const Microphone = ({ ctx }) => {
  const [audio, setAudio] = useState(null);

  const getMicrophone = async () => {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    setAudio(audio)
  }

  const stopMicrophone = () => {
    audio.getTracks().forEach(track => track.stop());
    setAudio(null)
  }

  const toggleMicrophone = () => {
    if (audio) {
      stopMicrophone();
    } else {
      getMicrophone();
    }
  }
  return (
    <div className="App">
      <div className="controls">
        <button onClick={toggleMicrophone}>
          {audio ? 'Stop microphone' : 'Get microphone input'}
        </button>
      </div>
      {audio ? <AudioAnalyser audio={audio} audioCtx={ctx} /> : ''}
    </div>
  )
}

Microphone.propTypes = {
  ctx: PropTypes.object.isRequired
}

export default Microphone;
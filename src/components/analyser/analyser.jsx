import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AudioVisualiser from '../visualiser';

const AudioAnalyser = ({ audioCtx, audio }) => {
  const [audioData, setAudioData] = useState(new Uint8Array(0));
  const [analyser, setAnalyser] = useState(audioCtx.createAnalyser())
  const [dataArray, setDataArray] = useState(new Uint8Array(1024))
  const [rafId, setRafId] = useState()

  useEffect(() => {
    setDataArray(new Uint8Array(analyser.frequencyBinCount))
    const source = audioCtx.createMediaStreamSource(audio);
    source.connect(analyser);
    return () => {
      analyser.disconnect();
      source.disconnect();
    }
  }, [])

  useEffect(() => {
    function animate() {
      let rafId = requestAnimationFrame(tick);
      setRafId(rafId)
    }
    animate();
    return () => {
      cancelAnimationFrame(rafId);
    }
  }, [])



  const tick = () => {
    analyser.getByteTimeDomainData(dataArray);
    setAudioData(dataArray);
    setRafId(requestAnimationFrame(tick))
  }

  return <AudioVisualiser audioData={audioData} />;
}
AudioAnalyser.propTypes = {
  ctx: PropTypes.object.isRequired
}
export default AudioAnalyser;
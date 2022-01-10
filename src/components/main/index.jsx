import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import AudioAnalyser from '../analyser/analyser';
import Drag from '../dnd/Drag';
import Dropdown from '../inputs/Dropdown';
import Slider from '../inputs/Slider';
import AudioVisualiser from '../visualiser';

const Main = ({ ctx }) => {
  const [sustain, setSustain] = useState('0.1');
  const [oscType, setOscType] = useState('sine');
  const [oscFrequency, setOscFrequency] = useState(220)
  const [dataArray, setDataArray] = useState(new Uint8Array(1024))
  const [analyser, setAnaliser] = useState(ctx.createAnalyser())
  const [oscillator, setOscillator] = useState(ctx.createOscillator())
  const [rafId, setRafId] = useState()

  useEffect(() => {
    oscillator.type = oscType;
    oscillator.frequency.setValueAtTime(Number(oscFrequency), ctx.currentTime);
  }, [oscType, oscFrequency])

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
    setRafId(requestAnimationFrame(tick))
  }

  const handlePlay = () => {
    const gainControl = ctx.createGain();

    oscillator.connect(gainControl);

    gainControl.connect(analyser)
    analyser.connect(ctx.destination)

    oscillator[oscillator.start ? 'start' : 'noteOn'](0);
  }

  const handleGainLevel = (value) => {
    setSustain(value)
  }

  const handleType = (type) => {
    setOscType(type)
  }

  const handleFreq = (value) => {
    setOscFrequency(value)
  }

  return (
    <div>
      <button onClick={handlePlay}>Play</button>
      <Slider getValue={handleGainLevel} name="Sustain Level" min={'1'} max={'10'} reduce={true} />
      <Slider getValue={handleFreq} name="Frequency" min={'220'} max={'880'} />
      <Dropdown getValue={handleType} />
      <Drag>
        <AudioVisualiser audioData={dataArray} analyser={analyser} />
      </Drag>
    </div>
  )
}

Main.propTypes = {
  ctx: PropTypes.object.isRequired
}

export default Main;
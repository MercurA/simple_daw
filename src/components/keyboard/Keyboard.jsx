import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { octave } from '../../utils/constants';
import './styles.scss';

const Keyboard = ({ ctx, frequency, oscType = 'sine', sustain = 0.3 }) => {
  const keys = Object.keys(octave);
  const [keyPressed, setKeyPressed] = useState(null);
  const [gain, setGain] = useState(null);
  const [oscillation, setOscillation] = useState(null)

  useEffect(() => {
    window.addEventListener('keydown', (key) => {
      if (keys.includes(key.keyCode.toString())) {
        setKeyPressed(key.keyCode)
      }
    })
  })

  useEffect(() => {
    if (keyPressed && keys.includes(keyPressed.toString())) {
      ctx && setSoundToKey()
    }
  }, [keyPressed])

  const setSoundToKey = () => {
    const osc = ctx.createOscillator()
    const gainControl = ctx.createGain()
    setGain(gainControl)
    setOscillation(osc)
    osc.type = oscType;
    octave[keyPressed]?.freq && osc.frequency.setValueAtTime(Number(octave[keyPressed]?.freq), ctx.currentTime);

    osc.connect(gainControl);
    gainControl.connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + sustain)
  }

  return (
    <>
      <div id='keyboard'>
        <div className="key white c" data-note="C3" ></div>
        <div className="key black c_sharp" data-note="C#3"></div>
        <div className="key white d" data-note="D3"></div>
        <div className="key black d_sharp" data-note="D#3"></div>
        <div className="key white e" data-note="E3"></div>
        <div className="key white f" data-note="F3"></div>
        <div className="key black f_sharp" data-note="F#3"></div>
        <div className="key white g" data-note="G3"></div>
        <div className="key black g_sharp" data-note="G#3"></div>
        <div className="key white a" data-note="A3"></div>
        <div className="key black a_sharp" data-note="A#3"></div>
        <div className="key white b" data-note="B3"></div>
        <div className="key white c" data-note="C4"></div>
        <div className="key black c_sharp" data-note="C#4"></div>
        <div className="key white d" data-note="D4"></div>
        <div className="key black d_sharp" data-note="D#4"></div>
        <div className="key white e" data-note="E4"></div>
        <div className="key white f" data-note="F4"></div>
        <div className="key black f_sharp" data-note="F#4"></div>
        <div className="key white g" data-note="G4"></div>
        <div className="key black g_sharp" data-note="G#4"></div>
        <div className="key white a" data-note="A4"></div>
        <div className="key black a_sharp" data-note="A#4"></div>
        <div className="key white b" data-note="B4"></div>
        <div className="key white c" data-note="C5"></div>
        <div className="key black c_sharp" data-note="C#5"></div>
        <div className="key white d" data-note="D5"></div>
        <div className="key black d_sharp" data-note="D#5"></div>
        <div className="key white e" data-note="E5"></div>
        <div className="key white f" data-note="F5"></div>
        <div className="key black f_sharp" data-note="F#5"></div>
        <div className="key white g" data-note="G5"></div>
        <div className="key black g_sharp" data-note="G#5"></div>
        <div className="key white a" data-note="A5"></div>
        <div className="key black a_sharp" data-note="A#5"></div>
        <div className="key white b" data-note="B5"></div>
      </div>

    </>
  )
}

Keyboard.propTypes = {
  ctx: PropTypes.object.isRequired,
  oscType: PropTypes.string,
  frequency: PropTypes.string,
  sustain: PropTypes.string
}

export default Keyboard;
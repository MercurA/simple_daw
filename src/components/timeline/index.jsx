import React, { useRef, useState, useEffect } from 'react'
import classNames from 'classnames';
import './styles.scss';
import { ReactComponent as IconPlay } from '../../assets/icons/play.svg'
import { ReactComponent as IconPause } from '../../assets/icons/pause.svg';
import Draggable from '../dnd/Draggable';

let count = 0;
const TimelineWrapper = () => {
  const cursorRef = useRef(null);
  const [id, setId] = useState(undefined);
  const [isPlaying, setPlay] = useState(false);
  const [cursorPos, setCursorPos] = useState(0);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  useEffect(() => {
    if (cursorRef.current) {
      if (isPlaying) {
        moveCursor()
      } else {
        let lastCursorPos = Number(cursorRef.current.style.left.split('px')[0])
        setCursorPos(lastCursorPos)
        clearTimeout(id);
      }
    }
    return () => {
      clearTimeout()
    }
  }, [isPlaying])

  const handleKeyDown = (e) => {
    if (e.code === 'Space') {
      setPlay(!isPlaying)
    }
  }

  const moveCursor = () => {
    count += 1;
    cursorRef.current.style.left = count + 'px'
    let timer = setTimeout(function () {
      moveCursor()
    }, 1000 / 60)
    setId(timer)
  }

  const play = () => {
    setPlay(!isPlaying)
    setCursorPos(count);
  }

  const handleOnClick = (e) => {
    debugger
  }

  const classes = classNames({
    containerTimeline: true,
  })

  return (
    <div className={classes}>
      <div className='innerContainer' onClick={handleOnClick}>
        <div className='header'>
          <div className='playBtn' onClick={play}>
            {isPlaying ? <IconPlay /> : <IconPause />}
          </div>
        </div>
        <div className='cursor' ref={cursorRef}></div>
      </div>
    </div>
  )
}

export default TimelineWrapper;
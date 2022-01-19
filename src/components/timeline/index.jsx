import React, { useRef, useState, useEffect } from 'react'
import classNames from 'classnames';
import './styles.scss';
import { ReactComponent as IconPlay } from '../../assets/icons/play.svg'
import { ReactComponent as IconPause } from '../../assets/icons/pause.svg';
import { getPosition } from './helpers';

let count = 0;
const TimelineWrapper = ({ parentRef }) => {
  const cursorRef = useRef(null);
  const containerRef = useRef(null);
  const [id, setId] = useState(undefined);
  const [isPlaying, setPlay] = useState(false);

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
    var xPosition = getPosition(containerRef, cursorRef);
    if (count === window.innerWidth - xPosition - 9) {
      count = 0;
    }
    count += 1;
    cursorRef.current.style.left = `${count}px`
    let timer = setTimeout(function () {
      moveCursor()
    }, 1000 / 60)

    setId(timer)
  }

  const play = () => {
    setPlay(!isPlaying)
  }

  const handleOnClick = (e) => {
    var xPosition = e.clientX - getPosition(containerRef, cursorRef);
    cursorRef.current.style.left = `${xPosition}px`;
    count = xPosition;
  }

  const classes = classNames({
    containerTimeline: true,
  })

  return (
    <div className={classes} ref={containerRef}>
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
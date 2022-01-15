import React, { useState, useRef, useEffect } from 'react'
import { Move } from "../../utils/constants";
import classNames from 'classnames';
import './styles.scss'

const Drop_1 = ({ dragOver, type }) => {
  const [item, setItem] = useState([]);
  const [isDragged, setDragged] = useState(false);
  const dragItem = useRef();

  useEffect(() => {
    setDragged(isDragged)
    dragOver(isDragged, item)
  }, [isDragged])

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const data = e.dataTransfer.getData("application/audio");
    setItem([...item, data])
    setDragged(false)
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.effectAllowed = Move;
    setDragged(true)
  }

  const classes = classNames({
    audioContainer: type === 'audio'
  })

  return (
    <div
      ref={dragItem}
      id="drop"
      className="drop_1"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {item.map((name) => (<div div className={classes}>{name}</div>))}
    </div >
  )
}

export default Drop_1;
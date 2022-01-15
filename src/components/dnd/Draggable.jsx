import classNames from "classnames";
import React, { useState, useRef, useEffect } from "react";
import { Move } from "../../utils/constants";
import './styles.scss'

const Draggable = ({ children, id }) => {
  const [item, setItem] = useState(null);
  const [isDragged, setDragged] = useState(false);
  const dragItem = useRef();


  const handleDragStart = (e) => {
    dragItem.current = e.target.id;
    e.dataTransfer.setData(`application/${id}`, id)
    setDragged(true)
  }

  const dragClass = classNames({
    dragged: isDragged,
    draggable: true
  })

  return (
    <div
      id="drag"
      draggable
      ref={dragItem}
      onDragStart={handleDragStart}
      // onDrop={handleDrop}
      // onDragOver={handleDragOver}
      className={dragClass}
    >
      {children}
    </div>
  )
}

export default Draggable;
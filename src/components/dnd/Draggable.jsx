import classNames from "classnames";
import React, { useState, useRef } from "react";
import './styles.scss'

const Draggable = ({ children, id, area, itemRef, onAxis = false }) => {
  const [item, setItem] = useState(null);
  const [isDragged, setDragged] = useState(false);
  const dragItem = useRef();

  //TODO handle drop on a specific location

  const handleDragStart = (e) => {
    dragItem.current = e.target.id;
    e.dataTransfer.setData(`application/${id}`, id)
    setDragged(true)
  }

  const dragClass = classNames({
    dragged: isDragged,
    draggable: true
  })

  const handleMouseDown = (e) => {
    e = e || window.event;
    var start = 0, diff = 0;
    if (e.pageX) start = e.pageX;
    else if (e.clientX) start = e.clientX;

    itemRef.current.style.position = 'relative';
    document.body.onmousemove = function (e) {
      e = e || window.event;
      var end = 0;
      if (e.pageX) end = e.pageX;
      else if (e.clientX) end = e.clientX;

      diff = end - start;
      itemRef.current.style.left = diff + "px";
    };
    document.body.onmouseup = function () {
      // do something with the action here
      // elem has been moved by diff pixels in the X axis
      itemRef.current.style.position = 'static';
      document.body.onmousemove = document.body.onmouseup = null;
    };
  }

  return (
    <div
      id="drag"
      draggable
      onMouseDown={onAxis ? handleMouseDown : null}
      ref={dragItem}
      onDragStart={handleDragStart}
      className={dragClass}
      style={{
        width: `${area}px`
      }}
    >
      {children}
    </div>
  )
}

export default Draggable;
import React from 'react';

const Dragable = ({ children, dataItem, dropEffect }) => {

  const startDrag = (ev) => {
    ev.dataTransfer.setData("drag-item", dataItem);
    ev.dataTransfer.effectAllowed = dropEffect;
  }

  return (
    <div draggable onDragStart={startDrag}>
      {children}
    </div>
  )
}

export default Dragable; 
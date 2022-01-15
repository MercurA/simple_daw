import { useEffect, useState } from "react";
import classNames from "classnames";
import './styles.scss';
const log = (s, d) => {
  console.log(s, d)
}
const DragTrigger = ({ children, classname }) => {
  const [isDragged, setIsDragged] = useState(false);
  const counter = 0;
  useEffect(() => {
    document.addEventListener('ondragenter', handleDragEnter);
    document.addEventListener('ondragleave', handleDragLeave);
    document.addEventListener('ondrop', handleDrop);
    return () => {
      document.removeEventListener('ondragenter', handleDragEnter);
      document.removeEventListener('ondragleave', handleDragLeave);
      document.removeEventListener('ondrop', handleDrop);
    }
  })

  const handleDragEnter = (e) => {
    e.stopPropagation();
    e.preventDefault();
    counter++
    setIsDragged(true)
    log('dragEnter', counter)
  }
  const handleDragLeave = (e) => {
    e.stopPropagation();
    e.preventDefault();
    counter--
    setIsDragged(false)
  }
  const handleDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsDragged(false);
    counter = 0
  }

  const dropContainer = classNames({
    'container': true
  })

  return (
    <div
      className={dropContainer}

    >
      {children}
    </div>
  )
}

export default DragTrigger;
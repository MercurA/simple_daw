import React, { useState } from 'react';
import classNames from 'classnames';
import Draggable from '../dnd/Draggable';

import './styles.scss'

const FileRack = ({ children }) => {
  const classes = classNames({
    fileGrid: true
  })

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default FileRack;
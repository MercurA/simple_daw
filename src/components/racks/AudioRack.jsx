import React, { useState } from 'react';
import classNames from "classnames";
import Drop from '../dnd/Drop';

import './styles.scss';

const AudioRack = ({ children }) => {
  const [itemOver, setItemOver] = useState(false);
  const [item, setItem] = useState('');

  const classes = classNames({
    audioRack: true,
    over: itemOver
  });

  const handleDragOver = (value, id) => {
    setItemOver(value);
    setItem(id)
  }

  return (
    <div className={classes}>
      <Drop dragOver={handleDragOver} type={'audio'} />
    </div>
  )
}

export default AudioRack;
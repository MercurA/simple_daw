import classNames from 'classnames';
import React from 'react';

const PluginRack = ({ children }) => {

  const classes = classNames({
    pluginRack: true
  })

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default PluginRack; 
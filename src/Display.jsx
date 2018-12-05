import React from 'react'
import './Display.css'

const Display = (props) => {
  return (
    <div id="display">
      <div className="lastSound">{props.lastSound}</div>
    </div>
  )
}

export default Display

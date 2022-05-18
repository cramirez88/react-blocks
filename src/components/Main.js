import React from 'react'

const Main = props => {
  return (
    <div style={{
      backgroundColor: props.color,
      width: props.width,
      height: props.height,
      verticalAlign: 'top',
      display: 'inline-block',
      position: 'absolute'
    }}></div>
  )
}

export default Main
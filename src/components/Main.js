import React from 'react'

const Main = props => {
  return (
    <div style={{
      display: 'inline-block',
      backgroundColor: props.color,
      width: props.width,
      heigth: props.height,
      verticalAlign: 'top'
    }}>Hello</div>
  )
}

export default Main
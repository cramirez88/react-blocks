import React from 'react'



const Header = props => {
  return (
    <div style = {{backgroundColor: props.color,
    height: props.height, width: props.width}}></div>
  )
}

export default Header;
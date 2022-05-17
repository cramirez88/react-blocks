import React from 'react'



const Header = props => {
  return (
    <div style = {{backgroundColor: props.color,
    height: props.height}}></div>
  )
}

export default Header;
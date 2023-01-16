import React from 'react'
import Advertisement from './Advertisement';
import Subcontent from './Subcontent';

export default function Main() {
  return (
    <div style={{ display:'inline-block', width: '60%', height: '370px', backgroundColor:'#e06666'}}>
      <Subcontent/>
      <Subcontent/>
      <Subcontent/>
      <Advertisement/>
    </div>
  )
}

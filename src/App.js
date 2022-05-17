import React from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Main from './components/Main'
// import Subcontent from './components/Subcontent'
// import Advertisement from './components/Advertisement'

function App() {
  return (
    <>
    <Header height={'10vh'} color={'#6aa84f'}/>
    <Navigation color={'#6fa8dc'} height={'350px'} width={'15%'}/>
    <Main color={'#e06666'} height={'300px'} width={'85%'} />
    </>
  );
}

export default App;

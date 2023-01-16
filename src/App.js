import React from 'react'
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Subcontent from './components/Subcontent';
function App() {
  return (
  <div>
    <Header/>
    <Navigation/>
    <Main>
      <Subcontent/>
      <Subcontent/>
      <Subcontent/>
    </Main>
  </div>
    
  
    
  );
}

export default App;

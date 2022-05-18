import React from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Subcontent from './components/Main';
// import Advertisement from './components/Advertisement'
import styles from './components/MyAppComponent.modules.css'

function App() {
  return (
  <div className={styles.app}>


    <Header height={'20vh'} color={'#6aa84f'} width={'100%'}/>
    <Navigation color={'#6fa8dc'} height={'350px'} width={'15%'}/>
    <Main color={'#e06666'} height={'350px'} width={'85%'}  >
      <Subcontent   />
    </Main>
   
    
    </div>
    
  
    
  );
}

export default App;

import React from 'react';
import styles from './App.module.scss';
import First from './First/First';
import Second from './Second/Second';
import Seventh from './Seventh/Seventh';
import Sixth from './Sixth/Sixth';
import Third from './Third/Third';


function App() {
  return (
    <div className={styles.mainApp}>
      <First />
      <Second />
      <Third />
      <Sixth />
      <Seventh />
    </div>
  )
}

export default App

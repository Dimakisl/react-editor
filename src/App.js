import React from 'react';
import Codebar from './components/CodeBar/CodeBar';
import { EditorProvider } from './context/context';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Preview from './components/Preview/Preview';

function App() {
  return (
    <EditorProvider>
      <Codebar/>
      <div className={styles.main}>
        <Header/>
        <Preview />
      </div>
    </EditorProvider>
  );
}

export default App;

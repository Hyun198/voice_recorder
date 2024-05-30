import './App.css';
import 'boxicons';
import React, { useState } from 'react'
import Header from './Header/header'
import useSpeechToText from './useSpeechToText';

function App() {
  const { transcript, listening, toggleListening } = useSpeechToText();
  return (
    <>
      <Header />
      <div className='main-container'>
        <textarea className="transcript" value={transcript} onChange={() => { }} />
        <button onClick={toggleListening}>
          {listening ? '음성인식 중지' : '음성인식 시작'}
        </button>
      </div>
    </>
  );
}

export default App;

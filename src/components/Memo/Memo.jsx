import React from 'react'
import useSpeechToText from '../../useSpeechToText'
import micro from '../../assets/microphone.png'

function Memo() {
    const { transcript, listening, toggleListening } = useSpeechToText();
    return (
        <div className='main-container'>
            <h1>Memo</h1>
            <textarea className="transcript" placeholder="texting..." value={transcript} onChange={() => { }} />
            <div className="row">
                <button onClick={toggleListening}>
                    <img src={micro}></img>
                    {listening ? '중지' : '글쓰기'}
                </button>
            </div>

        </div>
    )
}

export default Memo
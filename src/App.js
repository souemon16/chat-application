import React from 'react';
import './App.css';
import { ChatEngine } from 'react-chat-engine';

const App = () => {
    return (
        <>
        
        <ChatEngine
        height="100vh"
        projectID="e826f250-369f-49c1-80be-8ac6963f8226"
        userName="souemon"
        userSecret="123456"
        />
        <h1>Hello</h1>
        </>
    );
};

export default App;
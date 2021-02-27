import React from 'react';
import './App.css';
import { ChatEngine, ChatFeed } from 'react-chat-engine';
import LoginForm from './Components/LoginForm';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <>
        <ChatEngine
			height='100vh'
			userName='souemon'
			userSecret='123456'
			projectID='e826f250-369f-49c1-80be-8ac6963f8226'
           
		/>
        </>
    );
};

export default App;
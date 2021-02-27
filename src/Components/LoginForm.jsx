import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': 'e826f250-369f-49c1-80be-8ac6963f8226', 'User-Name': username, 'User-Secret': password}
        
        try {
           await axios.get('https://api.chatengine.io/chats', { headers: authObject })

           localStorage.setItem('username', username);
           localStorage.setItem('password', password);
           
           window.location.reload();
        } catch (error) {
            setError('Oops, incorrect username and password.')
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit} action="">
                    <input type="text" name="userName" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required />
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required />
                    <div align="center">
                    <button type="submit" className='button'>
                        <span>Start Chatting</span>
                    </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
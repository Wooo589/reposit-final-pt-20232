import React, { useState } from 'react';

import './styles.css';

const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div id="login">
            <div className="title">Login</div>
            <div className="form">
                <div className="field">
                    <label htmlFor="username">Nome de Usuário:</label>
                    <input 
                    type="text" 
                    name="username"
                    id="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} />

                </div>
                <div className="field">
                    <label htmlFor="password">Senha:</label>
                    <input 
                    type="text"
                    name="password"
                    id="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="actions">
                    <button>Entrar</button>
                </div>
            </div>
        </div>
        
    )
}

export default LoginPage;

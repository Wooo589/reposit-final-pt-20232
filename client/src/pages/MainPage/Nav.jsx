import React from 'react';

const Nav = ({ onLogout }) => {
    return (
        <div className="nav">
            <h1 className="logo">Orcfood</h1>
            <button type="button" onClick={onLogout}>Sair</button>
      </div>
    );
}

export default Nav;
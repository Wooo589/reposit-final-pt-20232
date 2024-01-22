import React, { useState } from 'react';

const Menu = ({ items, onDeleteItem, onNewItem }) => {
    
  const [ newItem, setNewItem ] = useState('');
  
  return (
    <div className="menu">
      <h2 className="title">Cardápio</h2>
        
      <ul className="list">
        {
          items.map((item) => (
            <li className="item" key={item._id}>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="description">{item.description}</div>
                <div className="price">{item.price}</div>
                <div className="photo"><img src={item.description} alt='foto do pedido'></img></div>
              </div>
              <button type="button" onClick={() => onDeleteItem(null)}>Apagar</button>
            </li>
          ))
        };
        </ul>

        <div className="new">
          <label htmlFor="new-item">Novo Item:</label>
          <input 
          type="url"
            name="new-item"
            id="new-item" 
            value={newItem}
            onChange={ (e) => setNewItem(e.target.value) }/>

          <button type="button" onClick={() => onNewItem(newItem)}>Adicionar</button>
        </div>

    </div>
  )
}

export default Menu;
